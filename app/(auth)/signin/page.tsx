"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import TextInput from "@/components/shared/TextInput";
import { useForm } from "react-hook-form";
import Form from "@/components/shared/Form";
import { BodyBase } from "@/components/typography/BodyBase";
import axios from "axios";
export const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(3).optional(),
});

export type FormData = z.infer<typeof schema>;

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await axios.post("http://localhost:5000/api/v1/auth/login", data, {
      withCredentials: true,
    });
  };

  return (
    <Form title="Sign in form" handleSubmit={handleSubmit(onSubmit)}>
      <TextInput label="Email" name="email" type="text" register={register} />

      <div className="flex flex-col">
        <TextInput
          label="Password"
          name="password"
          type="password"
          register={register}
        />
        <BodyBase className="self-end">
          <a href="/forget-password">Forget your Password?</a>
        </BodyBase>
      </div>

      <button className="bg-purple-500 py-2 text-white" type="submit">
        Login
      </button>
    </Form>
  );
};

export default Page;
