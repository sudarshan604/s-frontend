"use client";
import React, { useEffect } from "react";
import ChannelCard from "./_components/ChannelCard";
import useFaceBookLogin from "@/hooks/useFacebookLogin";
import useFacebookStore from "@/state-management/facebook/facebookStore";
import { useSavePlatForm } from "@/hooks/instaFetch";

const Page = () => {
  const { loginWithFacebook, facebookLoginDialog } = useFaceBookLogin();
  const { accessToken, platform, userId } = useFacebookStore();
  const { mutate } = useSavePlatForm();
  const socialMedia = [
    {
      label: "Facebook",
      icon: "/assets/images/facebook.png",
      description: "Page or Group",
      onLogin: loginWithFacebook,
    },
    {
      label: "Instagram",
      icon: "/assets/images/instagram.png",
      description: "Business or Creator accounts",
      onLogin: () => facebookLoginDialog("instagram"),
    },
    {
      label: "YouTube",
      icon: "/assets/images/youtube.png",
      description: "Channel",
      onLogin: () => {},
    },
    {
      label: "TikTok",
      icon: "/assets/images/tiktok.png",
      description: "Business or Creator accounts",
      onLogin: loginWithFacebook,
    },
  ];

  useEffect(() => {
    if (accessToken && platform == "instagram") {
      mutate({
        accessToken: accessToken,
        userId: userId,
        platform: platform,
      });
    }
  }, [accessToken]);

  return (
    <section className="pt-3 ml-6 flex flex-col min-h-full gap-y-6 border-r">
      {socialMedia.map((item) => {
        return <ChannelCard key={item.label} {...item} />;
      })}
    </section>
  );
};

export default Page;
