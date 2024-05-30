"use client";
import { BodyBase } from "@/components/typography/BodyBase";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { CommentInterface } from "./PostDetail";
import Avvvatars from "avvvatars-react";
import { Heading } from "@/components/typography/Heading";

const ReplyMessageBox = ({
  data,
  accessToken,
}: {
  data: CommentInterface;
  accessToken: string;
}) => {
  const [replayMessage, setRelyMessage] = useState("");
  const [commentUsetDetail, setCommentUserDetail] =
    useState<CommentInterface>();

  const id = data.id;

  const fetcCommentByUser = async () => {
    const url = `https://graph.facebook.com/v17.0/${id}?fields=id,text,timestamp,username`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();

    setCommentUserDetail(data);
  };

  useEffect(() => {
    fetcCommentByUser();
  }, [id]);

  const replyComment = async (id: string) => {
    try {
      const url = `https://graph.facebook.com/v17.0/${id}/replies?message=${replayMessage}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      setRelyMessage("");
    } catch (error) {}
  };

  return (
    <article className="flex max-w-[95%] mt-2 p-3 mx-auto rounded-xl bg-primary-300 shadow-custom">
      <div className="w-[8%]">
        <Avvvatars value={commentUsetDetail?.username!} />
      </div>
      <div className="w-[90%] flex flex-col gap-y-4">
        <div className="flex gap-x-2 items-center">
          <Heading className="" FontSize="heading5" level={3}>
            {commentUsetDetail?.username} :
          </Heading>
          <BodyBase className="" FontSize="bodyXS" fontWeight="regular">
            {data.text}
          </BodyBase>
        </div>
        <BodyBase className="" fontWeight="regular" FontSize="bodyXXS">
          Replying...
        </BodyBase>
        <div className="w-full min-w-full">
          <div className="flex items-center gap-x-3 mb-4">
            <figure>
              <Image
                src="/assets/images/facebook.png"
                alt="facebook"
                width={24}
                height={24}
              />
            </figure>
            <div className="flex gap-x-2 rounded-full items-center  w-full max-w-96 bg-white px-2">
              <BodyBase
                type="span"
                className=""
                FontSize="bodyXXS"
                fontWeight="regular"
              >
                @ {commentUsetDetail?.username}
              </BodyBase>
              <input
                type="text"
                value={replayMessage}
                onChange={(e) => setRelyMessage(e.target.value)}
                className=" py-3  w-auto px-3 rounded-3xl  outline-none "
              />
              <button
                onClick={() => {
                  if (replayMessage) {
                    replyComment(id);
                  }
                }}
                className="ml-auto "
              >
                send
              </button>
            </div>
          </div>
          <EmojiPicker
            height={100}
            width={400}
            className="ml-[15%] "
            searchDisabled
            reactionsDefaultOpen
            onEmojiClick={(EmojiClickData, event) =>
              setRelyMessage((prev) => prev + EmojiClickData.emoji)
            }
          />
        </div>
      </div>
    </article>
  );
};

export default ReplyMessageBox;
