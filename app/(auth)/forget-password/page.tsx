"use client";
import React from "react";
import TextInput from "@/components/shared/TextInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../signin/page";
import { FormData } from "../signin/page";
import Form from "@/components/shared/Form";
import { useMutation } from "@tanstack/react-query";
import apiClients from "@/services/http-service";

const httpService = new apiClients("/auth/forget-password");

const Page = () => {
  const { mutate } = useMutation({
    mutationFn: httpService.create,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    mutate(data);
  };
  return (
    <Form title="Reset password" handleSubmit={handleSubmit(onSubmit)}>
      <TextInput label="email" name="email" type="email" register={register} />
      <button type="submit">submit</button>
    </Form>
  );
};

export default Page;
