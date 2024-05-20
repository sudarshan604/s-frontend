"use client";
import React, { ChangeEvent } from "react";

interface TextType {
  name: string;
  label: string;
  register: any;
  type: "text" | "password";
}

const TextInput = ({ label, name, type, register, ...props }: TextType) => {
  const generatedId = React.useId();
  const appliedId = generatedId;
  console.log(props);
  return (
    <div className="flex flex-col">
      <label htmlFor={generatedId}>{label}</label>
      <input
        className="border-gray-500 border px-1 py-1 text-gray-700"
        id={appliedId}
        type={type}
        {...register(name)}
      />
    </div>
  );
};

export default TextInput;
