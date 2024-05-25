"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInput from "@/components/shared/TextInput";
import { useForm } from "react-hook-form";
import Form from "@/components/shared/Form";
import { BodyBase } from "@/components/typography/BodyBase";
import { useMutation } from "@tanstack/react-query";
import apiClients from "@/services/http-service";
import Button from "@/components/Button";

export const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6).optional(),
  name: z.string().min(3).optional(),
});

export type FormData = z.infer<typeof schema>;

const httpService = new apiClients("/auth/signin");

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
    <Form
      title="Sign in form"
      className="flex flex-col gap-y-[20px] border rounded-md w-1/3 mx-auto px-6 py-8 shadow-custom item-center"
      handleSubmit={handleSubmit(onSubmit)}
    >
      <TextInput label="Email" name="email" type="text" register={register} />

      <div className="flex flex-col gap-y-3">
        <TextInput
          label="Password"
          name="password"
          type="password"
          register={register}
        />
        <BodyBase className="self-end" fontWeight="bold">
          <a href="/forget-password">Forget your Password?</a>
        </BodyBase>
      </div>

      <Button impact="bold" tone="default" shape="rounded" size="large">
        Login
      </Button>
    </Form>
  );
};

export default Page;
