"use client";
import { useCurrentUser } from "@/hooks/useFetch";
import { usePathname, useRouter, redirect } from "next/navigation";
import React from "react";

import { Spinner } from "@/components/shared/Spinner";
import Header from "@/components/Header/Header";
const AuthenticatePage = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { data, isLoading, isFetching } = useCurrentUser();

  const minHeightTemplate =
    pathname !== "/"
      ? "h-[calc(100vh-100px)] min-h-[calc(100vh-100px)] pt-3 "
      : "h-[100vh] max-h-[100vh]";

  if (isLoading) {
    return <Spinner />;
  }

  if (!data) {
    router.push("/");
  }

  return (
    <>
      <section className={` ${minHeightTemplate} `}>
        {pathname !== "/" && <Header />}
        {children}
      </section>
    </>
  );
};

export default AuthenticatePage;
