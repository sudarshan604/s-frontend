"use client";
import React, { useEffect, useState } from "react";
import PostDisplay from "../PostDisplay";
import PostDetail from "../PostDetail";
import Select from "@/components/shared/Select";
import { useGetUserPlatForm, UserDocument } from "@/hooks/instaFetch";
import { getNonEmptyArrayKeys } from "@/utils/nonemptyarraykey";
import { useGetfacebookPagePost } from "@/hooks/facebookapi";

const Page = () => {
  const [postId, setPostId] = useState<string>("");
  const [value, setValue] = useState("newest");
  const { data: postdata } = useGetfacebookPagePost();

  const { data } = useGetUserPlatForm();

  const nonemptyKeyArray = getNonEmptyArrayKeys(data?.[0]);

  useEffect(() => {
    const data = postdata?.reduce((acc, currentMedia) => {
      const media = JSON.parse(currentMedia.media);

      console.log(media);
      acc.push(media);
      return acc;
    }, []);
    console.log("data=", data);
  }, [postdata]);

  const handlePostClick = React.useCallback((id: string) => {
    setPostId(id);
  }, []);

  return (
    <section className="pt-8">
      <div></div>
      <div className="flex  min-h-full justify-around">
        <section className="w-1/4 min-h-full   ">
          <Select value={value} onChange={(e) => setValue(e.target.value)}>
            {nonemptyKeyArray.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </Select>
          <PostDisplay onClick={handlePostClick} />
        </section>
        <div className=" w-[40%] bg-white">
          <PostDetail id={postId} />
        </div>
      </div>
    </section>
  );
};

export default Page;
