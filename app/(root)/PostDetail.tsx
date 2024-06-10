import apiClients from "@/services/http-service";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import {
  filterfacebookPost,
  PostDetailInterface,
  PostInterface,
} from "./PostDisplay";
import Image from "next/image";
import { BodyBase } from "@/components/typography/BodyBase";
import Button from "@/components/shared/Button";
import Icon from "@/assets";
import { useGetUserPlatForm } from "@/hooks/instaFetch";
import ReplyMessageBox from "./ReplyMessageBox";
import { PagePostInterface, useGetfacebookPagePost } from "@/hooks/facebookapi";
import { useGetYoutubeContent } from "@/services/youtube-api";

const httpService = new apiClients<PostInterface>("/insta/get-insta-post");

export interface CommentInterface {
  id: string;
  text: string;
  username?: string;
}

const PostDetail = ({
  postId,
  platform,
}: {
  postId: string;
  platform: string;
}) => {
  const [post, setPost] = useState<
    PostDetailInterface | { id: string; media_url: string }
  >();

  const { data: platfromData } = useGetUserPlatForm();
  const [comments, setComments] = useState<CommentInterface[]>([]);

  const { data, error } = useQuery<any, Error>({
    queryKey: ["instapost"],
    queryFn: httpService.get,
  });
  const { data: fbPostData } = useGetfacebookPagePost();
  const { data: youtubeVideoData } = useGetYoutubeContent();

  const accesToken =
    platform === "instagram"
      ? platfromData?.[0]?.instagram[0]?.accessToken
      : platfromData?.[0]?.facebook[0]?.accessToken;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchPostCommint = async () => {
    const res = await fetch(
      `https://graph.facebook.com/${postId}/comments?access_token=${accesToken}`
    );

    const { data } = await res.json();

    setComments(data);
  };

  const fetchPostCommintFacebook = async () => {
    const res = await fetch(
      `https://graph.facebook.com/${postId}/comments?fields=from,message&access_token=${accesToken}`
    );

    const { data } = await res.json();

    const filterData = data.map((item: any) => {
      return {
        id: item.id,
        text: item.message,
      };
    });

    setComments(filterData);
  };

  useEffect(() => {
    if (platform === "youtube") {
      const newData = youtubeVideoData?.filter(
        (item) => item.resourceId === postId
      );

      const post = {
        media_url: newData[0].thumbnails,
      };
      setPost(post);
    }
  }, [youtubeVideoData, platform, postId]);

  useEffect(() => {
    if (platform === "instagram") {
      const post = data?.reduce(
        (acc: PostDetailInterface[], currentValue: PostInterface) => {
          let mediaObject = JSON.parse(currentValue.media);
          if (
            (mediaObject.media_type === "IMAGE" ||
              mediaObject.media_type === "CAROUSEL_ALBUM") &&
            mediaObject.id === postId
          ) {
            acc.push(mediaObject);

            return acc;
          }
          return acc;
        },
        []
      );

      setPost(post?.[0]);
    }
    if (platform === "facebook") {
      const data = filterfacebookPost(fbPostData!);

      const newData = data.filter((item: { id: string }) => item.id === postId);
      setPost(newData[0]);
    }
  }, [data, fbPostData, platform, postId]);

  useEffect(() => {
    if (postId && platform === "instagram") {
      fetchPostCommint();
    }
  }, [fetchPostCommint, platform, postId]);

  useEffect(() => {
    if (postId && platform === "facebook") {
      fetchPostCommintFacebook();
    }
  }, [platform, postId]);

  return (
    <article className="border h-full  max-h-full">
      <div className="p-2  flex pb-4 gap-x-6 border-b-gray-200">
        <figure>
          <Image
            className="rounded-md"
            src={post?.media_url!}
            alt="post"
            width={150}
            height={150}
          />
        </figure>
        <div className="flex gap-x-4">
          <div className="flex gap-x-1">
            <Icon type="loveIcon" />
            <BodyBase type="span" className="" fontWeight="medium">
              {post?.like_count}
            </BodyBase>
          </div>
          <div className="flex gap-x-1">
            <Icon type="commentIcon" />
            <BodyBase type="span" className="" fontWeight="medium">
              {post?.comments_count}
            </BodyBase>
          </div>
        </div>
      </div>
      <div className="relative   min-h-full h-full">
        {comments?.length > 0 ? (
          comments?.map((data, index) => {
            return (
              <ReplyMessageBox
                key={data.id}
                platform={platform}
                accessToken={accesToken}
                data={data}
              />
            );
          })
        ) : (
          <div className="item-center flex flex-col items-center">
            <Image
              src="/assets/images/social.png"
              alt="social icon"
              width={450}
              height={450}
            />
            <BodyBase className="m-4" fontWeight="medium">
              There are no comments on this post yet
            </BodyBase>
            <Button
              className="mx-auto block"
              impact="bold"
              tone="default"
              shape="rounded"
              size="large"
            >
              Engage with Next Post
            </Button>
          </div>
        )}
      </div>
    </article>
  );
};

export default PostDetail;
