import { BodyBase } from "@/components/typography/BodyBase";
import { Heading } from "@/components/typography/Heading";
import React from "react";
import UploadContainer from "./UploadContainer";
import MediaForm, { schema } from "./MediaForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Form from "@/components/shared/Form";
import { z } from "zod";
import Button from "@/components/shared/Button";
import UploadImage from "./UploadImage";
import usePostShedule from "@/state-management/facebook/postSheduleStore";
import TextInput from "@/components/shared/TextInput";
import UploadVideo from "./UploadVideo";
import { useFileUpload } from "@/hooks/platform";

export const schema = z.object({
  instagram: z.boolean().optional(),
  facebook: z.boolean().optional(),
  youtube: z.boolean().optional(),
  caption: z.string().min(3).max(100),
});

export type FormData = z.infer<typeof schema>;

const ImageUpload = () => {
  const [uploadFile, setUploadFile] = React.useState<
    {
      data_url?: string;
      file?: File;
      baseString?: string;
      from?: string;
    }[]
  >([]);
  const [mediaType, setMediaType] = React.useState<"image" | "video">("image"); // State to manage media type

  const { mutate } = useFileUpload();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const { setScheduleData } = usePostShedule();

  const onSubmit = async (data: FormData) => {
    // console.log(data);
    setScheduleData({ uploadFile, ...data, from: uploadFile.from });
  };

  return (
    <section className="">
      <Heading FontSize="heading2" level={2}>
        Create Post
      </Heading>
      <Form handleSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-x-2">
          {mediaType === "image" && (
            <>
              <TextInput
                name="instagram"
                register={register}
                type="checkbox"
                label="instagram"
              />
              <TextInput
                name="facebook"
                register={register}
                type="checkbox"
                label="facebook"
              />
            </>
          )}

          {mediaType !== "image" && (
            <TextInput
              name="youtube"
              register={register}
              type="checkbox"
              label="youtube"
            />
          )}
        </div>
        <textarea className="w-full min-h-72 h-1/2" {...register("caption")} />

        <div className="my-4">
          <Button
            onClick={() => setMediaType("image")}
            className={`mr-2 ${mediaType === "image" ? "bg-gray-300" : ""}`}
          >
            Upload Image
          </Button>
          <Button
            onClick={() => setMediaType("video")}
            className={`${mediaType === "video" ? "bg-gray-300" : ""}`}
          >
            Upload Video
          </Button>
        </div>

        {mediaType === "image" ? (
          <UploadImage
            images={uploadFile}
            onChange={(imageList, addUpdateIndex) => setUploadFile(imageList)}
          />
        ) : (
          <UploadVideo onChange={(file) => setUploadFile(file)} />
        )}

        <footer>
          <h2>shedule time</h2>
        </footer>
        <div className="mt-4 w-fit mx-auto">
          <Button
            className="border mt-6"
            impact="bold"
            tone="default"
            shape="rounded"
            size="small"
          >
            submit
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default ImageUpload;
