import { MediaItemInterface } from "@/hooks/platform";
import React, { useState } from "react";
import Image from "next/image";
import { useGetInstaUser } from "@/hooks/instaFetch";

interface TransformedEntry {
  key: string;
  value: MediaItemInterface[] | [];
}

interface PostEventInterface {
  data: TransformedEntry[];
  id: string;
}

const PostEvent = ({ data, id }: PostEventInterface) => {
  const { data: instaUser } = useGetInstaUser();
  const [isOpen, setIsOpen] = useState(false);

  const filterdata = data.filter((item) => item.value.length > 0);

  const instagram = instaUser?.[0];

  return (
    <div>
      {filterdata.map((item) => {
        const { mediaUrl, caption } = item.value[0];

        console.log("img url=", item);

        return (
          <div
            className="flex justify-between  items-center bg-red-400"
            key={item.key}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Image
              src={instagram?.profile_picture_url!}
              alt={instagram?.name!}
              width={24}
              height={24}
            />

            <span className="text-sm ">{caption}</span>
            <Image src={mediaUrl!} alt="post" width={24} height={24} />
          </div>
        );
      })}
      {isOpen && <div className="bg-red-500 absolute">delete</div>}
    </div>
  );
};

export default PostEvent;
