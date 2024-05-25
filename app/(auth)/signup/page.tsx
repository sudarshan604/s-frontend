"use client";
import Form from "@/components/shared/Form";
import TextInput from "@/components/shared/TextInput";
import { BodyBase } from "@/components/typography/BodyBase";
import apiClients from "@/services/http-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FormData, schema } from "../signin/page";
import Button from "@/components/Button";
import Link from "next/link";

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
    <section className="bg-primary-50 relative min-h-lvh">
      <Form
        title="Sign Up form"
        className="flex flex-col gap-y-[24px] border rounded-md w-1/3 px-6 py-8 shadow-custom  bg-white item-center"
        handleSubmit={handleSubmit(onSubmit)}
      >
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

        <Button impact="bold" tone="default" shape="rounded" size="large">
          Sign UP
        </Button>
        <BodyBase fontWeight="regular" className="">
          Already had account ?
          <Link className="font-semibold text-primary-600" href="/signin">
            {"  "}
            signin
          </Link>
        </BodyBase>
      </Form>
    </section>
  );
};

export default Page;
