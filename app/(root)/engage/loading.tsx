"use client";
import Skeleton from "react-loading-skeleton";

const Page = () => {
  return (
    <section className="pt-8">
      <div></div>
      <div className="flex  min-h-full justify-around">
        <section className="w-1/4 min-h-full   ">
          <Skeleton count={4} />
        </section>
        <div className=" w-[40%] bg-white">
          <Skeleton count={4} />
        </div>
      </div>
    </section>
  );
};

export default Page;
