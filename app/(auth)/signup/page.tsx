"use client";
import Form from "@/components/shared/Form";
import TextInput from "@/components/shared/TextInput";
import { BodyBase } from "@/components/typography/BodyBase";
import apiClients from "@/services/http-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FormData, schema } from "../signin/page";
import Button from "@/components/shared/Button";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const httpService = new apiClients<any>("/auth/register");

const Page = () => {
  const router = useRouter();
  const { mutate } = useMutation({
    mutationFn: httpService.create,
    onSuccess: () => {
      toast.success("user register successfully");
      router.push("/channels");
    },
    onError: () => {
      toast.error("error registering user");
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
    <section className="bg-primary-200 relative min-h-lvh">
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
          error={errors.name && errors.name.message}
        />

        <TextInput
          error={errors.email && errors.email.message}
          label="Email"
          name="email"
          type="text"
          register={register}
        />
        <TextInput
          label="Password"
          name="password"
          type="password"
          register={register}
          error={errors.password && errors.password.message}
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
