import React from "react";
import Image from "next/image";
import { BodyBase } from "@/components/typography/BodyBase";
import { Heading } from "@/components/typography/Heading";
import Button from "@/components/Button";

interface CardProps {
  label: string;
  icon: string;
  description: string;
}

const ChannelCard = (item: CardProps) => {
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
      <div className="">
        <Button impact="bold" tone="default" shape="square" size="medium">
          Connect
        </Button>
      </div>
    </article>
  );
};

export default ChannelCard;
