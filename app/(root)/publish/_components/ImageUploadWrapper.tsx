import { BodyBase } from "@/components/typography/BodyBase";
import { Heading } from "@/components/typography/Heading";
import React from "react";
import UploadContainer from "./UploadContainer";

const ImageUpload = () => {
  return (
    <section className="border border-gray-600">
      <Heading FontSize="heading2" level={2}>
        Create Post
      </Heading>
      <div className="flex gap-x-2">
        <h2>account</h2>
        <h2>account</h2>
        <h2>account</h2>
      </div>
      <UploadContainer />
    </section>
  );
};

export default ImageUpload;
