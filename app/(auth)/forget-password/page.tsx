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
import Button from "@/components/shared/Button";
import { BodyBase } from "@/components/typography/BodyBase";
import Link from "next/link";

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
    <section className="min-w-full bg-primary-100">
      <Form
        title="Reset password"
        className="item-center py-8 px-6 shadow-custom w-11/12 max-w-[500px]"
        handleSubmit={handleSubmit(onSubmit)}
      >
        <TextInput
          label="email"
          name="email"
          type="email"
          register={register}
          error={errors.email && errors.email.message}
        />
        <Button impact="bold" tone="default" shape="rounded" size="large">
          Get Reset Password Link
        </Button>
        <BodyBase className="self-end text-center" fontWeight="bold">
          Already a have an account ? <Link href="/signin">Log In</Link>
        </BodyBase>
      </Form>
    </section>
  );
};

export default Page;
