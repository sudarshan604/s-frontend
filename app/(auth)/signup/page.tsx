"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import TextInput from "@/components/shared/TextInput";
import { useForm } from "react-hook-form";
import Form from "@/components/shared/Form";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  username: z.string().min(3),
});

type FormData = z.infer<typeof schema>;

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {};

  return (
    <Form title="Sign Up form" handleSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="username"
        name="username"
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

      <button className="bg-purple-500 py-2 text-white" type="submit">
        Sign Up
      </button>
      <p>Already had account ? signin</p>
    </Form>
  );
};

export default Page;
