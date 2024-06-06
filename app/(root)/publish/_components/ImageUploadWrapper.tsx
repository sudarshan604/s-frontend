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

export const schema = z.object({
  instagram: z.boolean().optional(),
  facebook: z.boolean().optional(),
  caption: z.string().min(3).max(100),
});

export type FormData = z.infer<typeof schema>;

const ImageUpload = () => {
  const [uploadFile, setImages] = React.useState<
    {
      data_url: string;
      file: File;
    }[]
  >([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const { setScheduleData } = usePostShedule();

  const onSubmit = async (data: FormData) => {
    setScheduleData({ uploadFile, ...data });
  };

  return (
    <section className="border border-gray-600">
      <Heading FontSize="heading2" level={2}>
        Create Post
      </Heading>
      <Form handleSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-x-2">
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
        </div>
        <textarea className="w-full min-h-72 h-1/2" {...register("caption")} />
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
      </Form>
    </section>
  );
};

export default ImageUpload;
