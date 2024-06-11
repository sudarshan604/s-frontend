"use client";
import { useCurrentUser, useDeleteQuery } from "@/hooks/useFetch";
import Avvvatars from "avvvatars-react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "../shared/Button";
import { BodyBase } from "../typography/BodyBase";

const UserAvatar = () => {
  const { data } = useCurrentUser();
  const [isLogoClick, setLogoClick] = useState(false);

  const { refetch, isSuccess } = useDeleteQuery();

  useEffect(() => {
    if (isSuccess) {
      toast.success("logout succefully");
      redirect("/");
    }
  }, [isSuccess]);

  return (
    <div className="relative">
      <Button
        className="flex gap-x-2 items-center py-2"
        impact="bold"
        tone="default"
        shape="rounded"
        size="small"
        onClick={() => setLogoClick((prev) => !prev)}
      >
        <Avvvatars value={data?.name} size={18} />
        <BodyBase fontWeight="regular" FontSize="body" className="">
          {data.name}
        </BodyBase>
      </Button>
      {isLogoClick && (
        <Button
          className="absolute w-full top-11 "
          impact="bold"
          tone="default"
          shape="rounded"
          size="small"
          onClick={() => refetch()}
        >
          Logout
        </Button>
      )}
    </div>
  );
};

export default UserAvatar;
