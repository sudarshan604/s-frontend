"use client";
import React from "react";
import { BodyBase } from "../typography/BodyBase";

interface TextType {
  name: string;
  label: string;
  register: any;
  error?: string;
  type: "text" | "password" | "email";
}

const TextInput = ({ label, name, type, register, ...props }: TextType) => {
  const generatedId = React.useId();
  const appliedId = generatedId;
  return (
    <div className="flex flex-col">
      <BodyBase type="label" htmlFor={generatedId}>
        {label}
      </BodyBase>
      <input
        className="border-gray-500 border px-1 py-1 text-gray-700"
        id={appliedId}
        type={type}
        {...register(name)}
        {...props}
      />
    </div>
  );
};

export default TextInput;
