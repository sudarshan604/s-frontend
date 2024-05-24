"use client";
import axios from "axios";
import React from "react";
import { useEffect } from "react";

const Page = () => {
  const handleShowMe = async () => {
    await fetch("http://localhost:5000/api/v1/users/showMe", {
      credentials: "include",
    });
  };

  return (
    <div>
      <button onClick={handleShowMe}>CLick me</button>
    </div>
  );
};

export default Page;
