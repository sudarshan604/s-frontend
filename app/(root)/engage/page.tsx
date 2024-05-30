"use client";
import React, { useState } from "react";
import PostDisplay from "../PostDisplay";
import PostDetail from "../PostDetail";
import { Suspense } from "react";
import { Spinner } from "@/components/shared/Spinner";
const Page = () => {
  const [postId, setPostId] = useState<string>("");
  const handlePostClick = React.useCallback((id: string) => {
    setPostId(id);
  }, []);

  return (
    <div className="flex  min-h-full justify-around">
      <section className="w-1/4 min-h-full  border ">
        <Suspense fallback={<Spinner />}>
          <PostDisplay onClick={handlePostClick} />
        </Suspense>
      </section>
      <div className=" w-[40%] bg-white">
        <Suspense fallback={<p>loading detail...</p>}>
          <PostDetail id={postId} />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
