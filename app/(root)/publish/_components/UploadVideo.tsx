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

    const formData = new FormData();
    formData.append("file", uploadedFile);

    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result as string;
      onChange({
        baseString: base64String,
        from: "video",
      });
    };

    reader.readAsDataURL(uploadedFile);

    // const response = await axios.post(
    //   "http://localhost:5000/api/v1/shedule/uploads",
    //   formData,
    //   {
    //     method: "POST",
    //   }
    // );

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
