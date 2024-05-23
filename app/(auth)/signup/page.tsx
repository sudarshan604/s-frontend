"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import TextInput from "@/components/shared/TextInput";
import { useForm } from "react-hook-form";
import Form from "@/components/shared/Form";
import { schema, FormData } from "../signin/page";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  console.log(errors);
  const onSubmit = async (data: FormData) => {
    console.log(data);

    axios.post("http://localhost:5000/api/v1/auth/register", data, {
      withCredentials: true,
    });
  };

  return (
    <Form title="Sign Up form" handleSubmit={handleSubmit(onSubmit)}>
      <TextInput label="username" name="name" type="text" register={register} />

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
