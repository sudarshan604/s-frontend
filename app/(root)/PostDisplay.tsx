"use client";
import apiClients from "@/services/http-service";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PostDisplaySkeleTon from "./PostDisplaySkeleTon";
import { PagePostInterface, useGetfacebookPagePost } from "@/hooks/facebookapi";
import { platform } from "os";
import { useGetYoutubeContent } from "@/services/youtube-api";
export interface PostInterface {
  user: string;
  media: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PostDetailInterface {
  comments_count: number;
  id: string;
  like_count: number;
  media_type: string;
  media_url: string;
  owner: string;
  permalink: string;
  timestamp: string;
}

const httpService = new apiClients<PostInterface>("/insta/get-insta-post");

const PostDisplay = ({
  onClick,
  selectedMedia,
}: {
  onClick: (postId: string, platform: string) => void;
  selectedMedia: string;
}) => {
  const [mediaPost, setMediaPost] = useState([]);

  const { data, error } = useQuery<any, Error>({
    queryKey: ["instapost"],
    queryFn: httpService.get,
  });

  const { data: postData } = useGetfacebookPagePost();
  const { data: youtubeVideoData } = useGetYoutubeContent();

  useEffect(() => {
    const post = data?.reduce(
      (acc: PostDetailInterface[], currentValue: PostInterface) => {
        let mediaObject = JSON.parse(currentValue.media);
        if (
          mediaObject.media_type === "IMAGE" ||
          mediaObject.media_type === "CAROUSEL_ALBUM"
        ) {
          acc.push(mediaObject);

          return acc;
        }
        return acc;
      },
      []
    );

    const facebookData = filterfacebookPost(postData!);

    const youtudata = youtubeVideoData?.map((item) => {
      return {
        media_url: item.thumbnails,
        id: item.resourceId,
      };
    });

    if (selectedMedia === "facebook") {
      setMediaPost(facebookData);
    }

    if (selectedMedia === "instagram") {
      setMediaPost(post);
    }
    if (selectedMedia === "youtube") {
      setMediaPost(youtudata);
    }
  }, [data, postData, selectedMedia, youtubeVideoData]);

  return (
    <section className=" grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))]  gap-2   min-h-full">
      {(mediaPost ?? []).map((post: PostDetailInterface) => {
        return (
          <div
            key={post.id}
            className="hover:cursor-pointer  "
            onClick={() => onClick(selectedMedia, post.id)}
          >
            {!post?.message ? (
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "100%" }}
                src={post.media_url}
                alt="insta-post"
              />
            ) : (
              <div>{post?.message}</div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default React.memo(PostDisplay);

export const filterfacebookPost = (postData: PagePostInterface[]) => {
  return postData?.reduce((acc, currentMedia) => {
    const media = JSON.parse(currentMedia.media);
    if (media.attachments && media.attachments.data) {
      media.attachments.data.forEach((attachment) => {
        if (attachment.media && attachment.media.image) {
          acc.push({
            media_url: attachment.media.image.src,
            id: attachment.target.id,
          });
        }
      });
    } else {
      acc.push(media);
    }
    return acc;
  }, []);
};
