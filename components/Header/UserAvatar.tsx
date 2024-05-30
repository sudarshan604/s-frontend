"use client";
import { useCurrentUser, useDeleteQuery } from "@/hooks/useFetch";
import Avvvatars from "avvvatars-react";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import apiClients from "@/services/http-service";
import { BodyBase } from "../typography/BodyBase";
import { useQuery } from "@tanstack/react-query";

const UserAvatar = () => {
  const { data } = useCurrentUser();
  const [isLogoClick, setLogoClick] = useState(false);

  const { refetch, isSuccess } = useDeleteQuery();

  useEffect(() => {
    if (isSuccess) {
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
