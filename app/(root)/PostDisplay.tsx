"use client";
import apiClients from "@/services/http-service";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PostDisplaySkeleTon from "./PostDisplaySkeleTon";
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

const PostDisplay = ({ onClick }: { onClick: (id: string) => void }) => {
  const [instaPost, setInstaPost] = useState();
  const { data, error } = useQuery<any, Error>({
    queryKey: ["instapost"],
    queryFn: httpService.get,
  });

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
    setInstaPost(post);
  }, [data]);

  return (
    <section className=" grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))]  gap-2   min-h-full">
      {(instaPost ?? []).map((post: PostDetailInterface) => {
        return (
          <div
            key={post.id}
            className="hover:cursor-pointer  "
            onClick={() => onClick(post.id)}
          >
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "100%" }}
              src={post.media_url}
              alt="insta-post"
            />
          </div>
        );
      })}
    </section>
  );
};

export default React.memo(PostDisplay);
