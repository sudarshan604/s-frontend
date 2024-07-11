"use client";
import { BodyBase } from "@/components/typography/BodyBase";
import { Heading } from "@/components/typography/Heading";
import Image from "next/image";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

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
const AnalyzeSidebar = () => {
  const router = useRouter();

  const params = useSearchParams();

  const handleClick = (key: string) => {
    router.push("/analyze?key=" + key);
  };

  return (
    <>
      {socialMedia.map((item) => {
        return (
          <article
            key={item.icon}
            className="flex items-center justify-between gap-x-2 py-4 rounded-sm hover:bg-primary-100 hover:cursor-pointer px-6"
            onClick={() => handleClick(item.label)}
          >
            <figure className="">
              <Image src={item.icon} alt={item.label} width={36} height={36} />
            </figure>
            <div>
              <BodyBase
                type="p"
                FontSize="bodyS"
                className=""
                fontWeight="medium"
              >
                {item.label}
              </BodyBase>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default AnalyzeSidebar;
