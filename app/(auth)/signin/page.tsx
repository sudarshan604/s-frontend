"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import TextInput from "@/components/shared/TextInput";
import { useForm } from "react-hook-form";

const schema = z.object({
  email: z.string().email(),
});

type FormData = z.infer<typeof schema>;

const Page = () => {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("*******");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  console.log("re", register("email"));

  const onSubmit = () => {};

  return (
    <article className="p-4 w-1/2  max-w-xl mx-auto flex flex-col gap-4 border-red-500 border">
      <div>
        <p>Sign Up form</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <TextInput
          label="Email"
          type="text"
          {...register("email")}
          onchange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextInput
          label="Password"
          type="password"
          onchange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="bg-purple-500 py-2 text-white" type="submit">
          Login
        </button>
      </form>
    </article>
  );
};

export default Page;
