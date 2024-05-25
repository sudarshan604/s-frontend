"use client";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import FaceBookLogin from "@/components/FacebookLogin";
const Page = () => {
  const handleShowMe = async () => {
    await fetch("http://localhost:5000/api/v1/users/showMe", {
      credentials: "include",
    });
  };

  return (
    <div>
      <FaceBookLogin />
      <button onClick={handleShowMe}>CLick me</button>
    </div>
  );
};

export default Page;
