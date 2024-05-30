"use client";
import { Spinner } from "@/components/shared/Spinner";
import { useCurrentUser } from "@/hooks/useFetch";
import { useRouter } from "next/navigation";
import React from "react";

const AuthenticatePage = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { data, isLoading } = useCurrentUser();

  if (isLoading) {
    return <Spinner />;
  }

  if (data) {
    router.push("/channels");
  }

  return (
    <>
      <section>{children}</section>
    </>
  );
};

export default AuthenticatePage;
