"use client";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";

const Page = () => {
  const handleShowMe = async () => {
    await fetch("http://localhost:5000/api/v1/users/showMe", {
      credentials: "include",
    });
  };
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: "auth-code",
    scope: "https://www.googleapis.com/auth/youtube.readonly",
  });

  return (
    <div>
      <button onClick={login}>sign qith google</button>
    </div>
  );
};

export default Page;
