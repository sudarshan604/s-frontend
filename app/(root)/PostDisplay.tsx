"use client";
import apiClients from "@/services/http-service";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface PostInterface {
  user: string;
  media: string;
  createdAt: Date;
  updatedAt: Date;
}

interface PostDetailInterface {
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

const PostDisplay = () => {
  const [instaPost, setInstaPost] = useState();
  const { data, error } = useQuery<any, Error>({
    queryKey: ["instapost"],
    queryFn: httpService.get,
  });

  useEffect(() => {
    const post = data?.reduce(
      (acc: PostDetailInterface[], currentValue: PostInterface) => {
        let mediaObject = JSON.parse(currentValue.media);
        if (mediaObject.media_type === "IMAGE") {
          acc.push(mediaObject);

          return acc;
        }
        return acc;
      },
      []
    );
    setInstaPost(post);
  }, [data]);

  console.log(instaPost);
  return (
    <section className=" grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]  min-h-full">
      {(instaPost ?? []).map((post: PostDetailInterface) => {
        return (
          <Image
            key={post.id}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
            src={post.media_url}
            alt="insta-post"
          />
        );
      })}
    </section>
  );
};

export default PostDisplay;
