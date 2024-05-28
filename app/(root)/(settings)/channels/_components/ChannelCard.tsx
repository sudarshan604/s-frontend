"use client";
import Button from "@/components/Button";
import { BodyBase } from "@/components/typography/BodyBase";
import { Heading } from "@/components/typography/Heading";
import { useGetUserPlatForm } from "@/hooks/instaFetch";
import Image from "next/image";
import React from "react";

interface CardProps {
  label: string;
  icon: string;
  description: string;
  onLogin: () => void;
}

const ChannelCard = (item: CardProps) => {
  const { data } = useGetUserPlatForm();
  const lowerCaseLabel = item.label.toLocaleLowerCase();

  console.log(data?.includes("facebook"));

  return (
    <article className="flex items-center justify-between border min-w-[500px] w-96 px-3 py-4 rounded-sm">
      <figure className="">
        <Image src={item.icon} alt={item.label} width={36} height={36} />
      </figure>
      <div>
        <Heading level={2}>{item.label}</Heading>

        <BodyBase type="p" FontSize="body" className="" fontWeight="medium">
          {item.description}
        </BodyBase>
      </div>
      {data?.includes(lowerCaseLabel) ? (
        <div className="">
          <Button
            onClick={item.onLogin}
            impact="bold"
            tone="default"
            shape="square"
            size="medium"
          >
            Connect
          </Button>
        </div>
      ) : (
        <BodyBase className="" fontWeight="medium">
          connected
        </BodyBase>
      )}
    </article>
  );
};

export default React.memo(ChannelCard);
