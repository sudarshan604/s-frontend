"use client";
import Select from "@/components/shared/Select";
import { useGetUserPlatForm } from "@/hooks/instaFetch";
import { getNonEmptyArrayKeys } from "@/utils/nonemptyarraykey";
import React, { useEffect, useState } from "react";
import PostDetail from "../PostDetail";
import PostDisplay from "../PostDisplay";

const Page = () => {
  const [singlePostDetail, setSinglePostDetail] = useState<{
    postId: string;
    platform: string;
  }>();
  const [value, setValue] = useState("");
  const [platformData, setPlatFormData] = useState<string[]>([]);

  const { data } = useGetUserPlatForm();

  useEffect(() => {
    const nonemptyKeyArray = getNonEmptyArrayKeys(data?.[0]);

    setPlatFormData(nonemptyKeyArray);
    setValue(nonemptyKeyArray[0]);
  }, [data]);

  const handlePostClick = React.useCallback(
    (platform: string, postId: string) => {
      setSinglePostDetail({
        postId: postId,
        platform,
      });
    },
    []
  );

  console.log("sing=", singlePostDetail);
  return (
    <section className="pt-8">
      <div></div>
      <div className="flex  min-h-full justify-around">
        <section className="w-1/4 min-h-full   ">
          <Select value={value} onChange={(e) => setValue(e.target.value)}>
            {(platformData ?? []).map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </Select>
          <PostDisplay onClick={handlePostClick} selectedMedia={value} />
        </section>
        <div className=" w-[40%] bg-white">
          <PostDetail {...singlePostDetail} />
        </div>
      </div>
    </section>
  );
};

export default Page;
