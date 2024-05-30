import { useCurrentUser } from "@/hooks/useFetch";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

import { Spinner } from "@/components/shared/Spinner";
import Header from "@/components/Header/Header";
const AuthenticatePage = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { data, isLoading } = useCurrentUser();

  if (isLoading) {
    return <Spinner />;
  }

  if (!data) {
    router.push("/signin");
  }

  return (
    <>
      {pathname !== "/" && <Header />}

      {children}
    </>
  );
};

export default AuthenticatePage;
