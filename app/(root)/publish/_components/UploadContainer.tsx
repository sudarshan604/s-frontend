import React, { useEffect, useState } from "react";
import UploadImage from "./UploadImage";
import usePostShedule from "@/state-management/facebook/postSheduleStore";
import Button from "@/components/shared/Button";
const UploadContainer = () => {
  const [uploadFile, setImages] = React.useState<
    {
      data_url: string;
      file: File;
    }[]
  >([]);
  const [caption, setCaption] = useState<string>("");
  const { setScheduleData } = usePostShedule();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (uploadFile && caption !== " ") {
      setScheduleData({ uploadFile, caption });
    }
  };

  return (
    <section className="border relative border-gray-500 min-h-72 ">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full min-h-72 h-1/2"
          onChange={(e) => setCaption(e.target.value)}
        />
        <UploadImage
          images={uploadFile}
          onChange={(imageList, addUpdateIndex) => setImages(imageList)}
        />
        <footer>
          <h2>shedule time</h2>
        </footer>
        <div className="mt-4 w-fit mx-auto">
          <Button
            className="border border-red-500 mt-6"
            impact="bold"
            tone="default"
            shape="rounded"
            size="small"
          >
            submit
          </Button>
        </div>
      </form>
    </section>
  );
};

export default UploadContainer;
