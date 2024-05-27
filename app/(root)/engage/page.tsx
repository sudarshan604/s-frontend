import React from "react";
import PostDisplay from "../PostDisplay";
const page = () => {
  return (
    <div className="flex  min-h-full">
      <section className="w-1/4 min-h-full border">
        <PostDisplay />
      </section>
      <div></div>
    </div>
  );
};

export default page;
