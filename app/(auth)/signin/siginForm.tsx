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
import Button from "@/components/shared/Button";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export const schema = z.object({
  email: z.string().email().optional(),
  password: z.string().min(6).optional(),
  name: z.string().min(3).optional(),
});

export type FormData = z.infer<typeof schema>;

const httpService = new apiClients("/auth/login");

const SignInForm = () => {
  const router = useRouter();

  const notify = () => {
    toast.success("login succefully !");
  };

  const { mutate, isPending } = useMutation({
    mutationFn: httpService.create,
    onError: (err) => {
      console.log("err", err);
      toast.error("error login");
    },
    onSuccess: () => {
      notify();
      router.push("/channels");
    },
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
      <TextInput
        label="Email"
        error={errors.email && errors.email.message}
        name="email"
        type="text"
        register={register}
      />

      <div className="flex flex-col gap-y-3">
        <TextInput
          label="Password"
          name="password"
          type="password"
          register={register}
          error={errors.password && errors.password.message}
        />
        <BodyBase className="self-end" fontWeight="bold">
          <Link href="/forget-password">Forget your Password?</Link>
        </BodyBase>
      </div>

      <Button
        impact="bold"
        disabled={isPending}
        tone="default"
        shape="rounded"
        size="large"
      >
        Login
      </Button>
    </Form>
  );
};

export default SignInForm;
