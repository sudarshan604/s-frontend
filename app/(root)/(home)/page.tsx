"use client";
import axios from "axios";
import React from "react";
import { useEffect } from "react";

const Page = () => {
  const show = async () => {
    await fetch("http://localhost:5000/api/v1/users/showMe", {
      credentials: "include",
    });
  };

  useEffect(() => {
    show();
  }, []);

  return <div>howm</div>;
};

export default Page;
