import { MediaItemInterface } from "@/hooks/platform";
import React from "react";
import Image from "next/image";
import { useGetInstaUser } from "@/hooks/instaFetch";

interface TransformedEntry {
  key: string;
  value: MediaItemInterface[] | [];
}

interface PostEventInterface {
  data: TransformedEntry[];
}

const PostEvent = ({ data }: PostEventInterface) => {
  const { data: instaUser } = useGetInstaUser();

  const filterdata = data.filter((item) => item.value.length > 0);

  const instagram = instaUser?.[0];

  return (
    <div>
      {filterdata.map((item) => {
        const { imgUrl, caption } = item.value[0];

        return (
          <div
            className="flex justify-between items-center bg-red-400"
            key={item.key}
          >
            <Image
              src={instagram?.profile_picture_url!}
              alt={instagram?.name!}
              width={24}
              height={24}
            />

            <span className="text-sm ">{caption}</span>
            <Image src={imgUrl!} alt="post" width={24} height={24} />
          </div>
        );
      })}
    </div>
  );
};

export default PostEvent;
