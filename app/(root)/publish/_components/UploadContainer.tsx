import React, { useEffect } from "react";
import UploadImage from "./UploadImage";
import usePostShedule from "@/state-management/facebook/postSheduleStore";
const UploadContainer = () => {
  const [images, setImages] = React.useState<string>([]);
  const shedule = usePostShedule();

  useEffect(() => {
    if (images) {
      shedule.setScheduleData(images);
    }
  }, [images]);

  console.log(images);

  return (
    <section className="border relative border-gray-500 min-h-72 ">
      <textarea cols={10} className="w-full" />
      <UploadImage
        images={images}
        onChange={(imageList, addUpdateIndex) => setImages(imageList)}
      />
    </section>
  );
};

export default UploadContainer;
