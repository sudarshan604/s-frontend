import { useFileUpload } from "@/hooks/platform";
import axios from "axios";
import React, { useState } from "react";

const UploadVideo = ({ onChange }: { onChange: (uploadedFile) => void }) => {
  //   const [file, setFile] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const { mutate } = useFileUpload();

  const handleFileChange = async (event) => {
    const uploadedFile = event.target.files[0];
    // setFile(uploadedFile);

    console.log(event.target.files[0]);
    const formData = new FormData();
    formData.append("files", event.target.files);
    console.log("foem data=", formData);

    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    // const response = await axios.post(
    //   "http://localhost:5000/api/v1/shedule/uploads",
    //   formData,
    //   {
    //     method: "POST",
    //   }
    // );

    onChange(formData);
    if (uploadedFile) {
      const videoURL = URL.createObjectURL(uploadedFile);
      setVideoSrc(videoURL);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {videoSrc && (
        <div className="mt-4">
          <video
            controls
            width="150"
            height="150"
            src={videoSrc}
            className="rounded"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default UploadVideo;
