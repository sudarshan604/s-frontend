import React from "react";
import ChannelSidebar from "../ChannelSidebar";
import ChannelCard from "./_components/ChannelCard";

const socialMedia = [
  {
    label: "Facebook",
    icon: "/assets/images/facebook.png",
    description: "Page or Group",
  },
  {
    label: "Instagram",
    icon: "/assets/images/instagram.png",
    description: "Business or Creator accounts",
  },
  {
    label: "YouTube",
    icon: "/assets/images/youtube.png",
    description: "Channel",
  },
  {
    label: "TikTok",
    icon: "/assets/images/tiktok.png",
    description: "Business or Creator accounts",
  },
];

const Page = () => {
  return (
    <section className="pt-3 ml-6 flex flex-col min-h-full gap-y-6 border-r">
      {socialMedia.map((item) => {
        return <ChannelCard key={item.label} {...item} />;
      })}
    </section>
  );
};

export default Page;
