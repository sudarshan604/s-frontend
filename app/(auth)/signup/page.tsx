"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import TextInput from "@/components/shared/TextInput";
import { useForm } from "react-hook-form";
import Form from "@/components/shared/Form";
import { schema, FormData } from "../signin/page";
import { BodyBase } from "@/components/typography/BodyBase";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  console.log(errors);
  const onSubmit = async (data: FormData) => {
    axios.post("http://localhost:5000/api/v1/auth/register", data, {
      withCredentials: true,
    });
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
