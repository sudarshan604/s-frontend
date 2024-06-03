import useFaceBookPages, {
  PageDataInterface,
} from "@/state-management/facebook/pageStore";
import Form from "@/components/shared/Form";
import TextInput from "@/components/shared/TextInput";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/Button";

interface FacebookPageListInterface {
  closeModal: () => void;
  data: PageDataInterface[];
}

const FaceBookPageList: React.FC<FacebookPageListInterface> = ({
  data,
  closeModal,
}) => {
  const storeSelectedPageId = useFaceBookPages((s) => s.setSelectedPageID);

  const schema = z.object({
    selectedPage: z.string(),
  });

  type FormData = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (formdata: FormData) => {
    const selectedFacebookPage = data.filter((item: PageDataInterface) => {
      return item.name === formdata.selectedPage;
    });
    const pageId = selectedFacebookPage[0].id;
    storeSelectedPageId(pageId);

    closeModal();
  };

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      {data.map((item: PageDataInterface) => {
        return (
          <TextInput
            key={item.id}
            label={item.name}
            value={item.name}
            register={register}
            type="radio"
            name="selectedPage"
          />
        );
      })}
      <Button impact="bold" tone="default" shape="rounded" size="small">
        Submit
      </Button>
    </Form>
  );
};

export default FaceBookPageList;
