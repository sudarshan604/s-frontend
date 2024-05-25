"use client";
import React from "react";
import { BodyBase } from "../typography/BodyBase";

interface TextType {
  name: string;
  label: string;
  register: any;
  error?: string;
  type: "text" | "password" | "email" | "checkbox";
}

const TextInput = ({
  label,
  name,
  type,
  register,
  error,
  ...props
}: TextType) => {
  console.log(error);
  const generatedId = React.useId();
  const appliedId = generatedId;
  return (
    <div className="flex flex-col gap-y-[10px]">
      <BodyBase
        fontWeight="regular"
        type="label"
        htmlFor={generatedId}
        className="text-sm capitalize"
      >
        {label}
      </BodyBase>
      <input
        className="border px-1 text-gray-700 p-3 rounded-md shadow-default"
        id={appliedId}
        type={type}
        {...register(name)}
        {...props}
      />
      {error && (
        <BodyBase type="p" fontWeight="regular" className="text-red-500">
          {error}
        </BodyBase>
      )}
    </div>
  );
};

export default TextInput;
