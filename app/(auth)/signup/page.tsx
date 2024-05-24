"use client";
import Form from "@/components/shared/Form";
import TextInput from "@/components/shared/TextInput";
import { BodyBase } from "@/components/typography/BodyBase";
import apiClients from "@/services/http-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FormData, schema } from "../signin/page";

const httpService = new apiClients<any>("/auth/register");

const Page = () => {
  const { mutate } = useMutation({
    mutationFn: httpService.create,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    mutate(data);
  };

  return (
    <section className="bg-primary-700">
      <Form title="Sign Up form" handleSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="username"
          name="name"
          type="text"
          register={register}
        />

        <TextInput label="Email" name="email" type="text" register={register} />
        <TextInput
          label="Password"
          name="password"
          type="password"
          register={register}
        />

        <button className="bg-primary-50 py-2 text-white" type="submit">
          Sign Up
        </button>
        <BodyBase>Already had account ? signin</BodyBase>
      </Form>
    </section>
  );
};

export default Page;
