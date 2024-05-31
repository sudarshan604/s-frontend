import { MediaItemInterface } from "@/hooks/platform";
import React from "react";
import Image from "next/image";

interface TransformedEntry {
  key: string;
  value: MediaItemInterface[] | [];
}

interface PostEventInterface {
  data: TransformedEntry[];
}

const PostEvent = ({ data }: PostEventInterface) => {
  const filterdata = data.filter((item) => item.value.length > 0);
  return (
    <div>
      {filterdata.map((item) => {
        const { imgUrl, caption } = item.value[0];
        return (
          <div className="flex justify-between items-center" key={item.key}>
            <span>{caption}</span>
            <Image src={imgUrl} alt="post" width={48} height={48} />
          </div>
        );
      })}
    </div>
  );
};

export default PostEvent;
