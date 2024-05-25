import React from "react";
import ChannelSidebar from "./_components/ChannelSidebar";
import ChannelCard from "./_components/ChannelCard";

const Page = () => {
  return (
    <section className="pt-3 ml-6 flex min-h-full  border-r">
      <div className="w-1/5 pr-6 border-r h-full ">
        <ChannelSidebar />
      </div>
      <div className="w-4/5 pl-6">
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
      </div>
    </section>
  );
};

export default Page;
