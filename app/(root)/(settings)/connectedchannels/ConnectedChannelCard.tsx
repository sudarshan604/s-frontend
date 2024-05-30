"use client";
import Button from "@/components/Button";
import { BodyBase } from "@/components/typography/BodyBase";
import { Heading } from "@/components/typography/Heading";
import { useGetUserPlatForm, UserDocument } from "@/hooks/instaFetch";
import Image from "next/image";
import React from "react";

interface NewPlatFormInterface {
  name: string;
  source: string;
  _id: string;
}

const ChannelCard = () => {
  const { data } = useGetUserPlatForm();

  let combinedArray: NewPlatFormInterface[] = [];

  data?.forEach((dataObj) => {
    Object.keys(dataObj).forEach((key) => {
      if (Array.isArray(dataObj[key])) {
        dataObj[key].forEach((item) => {
          combinedArray.push({
            source: key,
            ...item,
          });
        });
      }
    });
  });

  return (
    <>
      {(combinedArray ?? []).map((item: NewPlatFormInterface) => {
        return (
          <article
            key={item._id}
            className="flex items-center justify-between border min-w-[500px] w-96 px-3 mb-4 py-4 rounded-sm"
          >
            <figure className="">
              {/* <Image src={item.icon} alt={item.label} width={36} height={36} /> */}
            </figure>
            <div>
              <Heading level={2}>{item.name}</Heading>

              <BodyBase
                type="p"
                FontSize="body"
                className=""
                fontWeight="medium"
              >
                {item.source}
              </BodyBase>
            </div>
            <div className=""></div>
          </article>
        );
      })}
    </>
  );
};

export default React.memo(ChannelCard);
