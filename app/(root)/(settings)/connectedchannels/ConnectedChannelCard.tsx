"use client";
import Button from "@/components/shared/Button";
import { BodyBase } from "@/components/typography/BodyBase";
import { Heading } from "@/components/typography/Heading";
import { useConnectedMedia, useDeleteInstaDetail } from "@/hooks/instaFetch";
import Image from "next/image";
import React, { useState } from "react";
import Tooltip from "./_components/Tooltip";
import Icon from "@/assets";
import { useDeleteFacebookDetail } from "@/hooks/facebookapi";

const ChannelCard = () => {
  const { data } = useConnectedMedia();
  const [showToolkip, setShowToolTip] = useState(false);

  const { mutate: deleteInsta } = useDeleteInstaDetail();

  const { mutate: deleteFacebook } = useDeleteFacebookDetail();

  const onDelete = (key: string) => {
    if (key === "facebook") {
      deleteFacebook();
    }
    if (key === "instagram") {
      deleteInsta();
    }
  };
  return (
    <>
      {(data ?? []).map((item) => {
        return (
          <article
            key={item.id}
            className="flex items-center justify-between border min-w-[500px] w-96 px-3 mb-4 py-4 rounded-sm"
          >
            <figure className="">
              <Image
                src={item.profile_picture_url}
                alt={item.name}
                width={72}
                height={72}
              />
            </figure>
            <div>
              <Heading level={2}>{item.name}</Heading>

              <BodyBase
                type="p"
                FontSize="body"
                className=""
                fontWeight="medium"
              >
                {item.key}
              </BodyBase>
            </div>
            <div className="relative">
              <button
                onClick={() => setShowToolTip(!showToolkip)}
                className="focus:outline-none"
              >
                <Icon
                  type="verticalIcon"
                  className="hover:cursor-pointer"
                  width={48}
                />
              </button>
              <Tooltip
                isTooKipOpen={showToolkip}
                className="absolute -right-14 bottom-1/2 translate-y-1/2 flex flex-col gap-y-2"
              >
                <Button
                  size={"small"}
                  impact={"none"}
                  shape={"rounded"}
                  tone={"danger"}
                  onClick={() => onDelete(item.key)}
                >
                  delete
                </Button>
                <Button
                  size={"small"}
                  impact={"none"}
                  shape={"pill"}
                  tone={"success"}
                  onClick={() => onDelete(item.key)}
                >
                  refetch
                </Button>
              </Tooltip>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default React.memo(ChannelCard);
