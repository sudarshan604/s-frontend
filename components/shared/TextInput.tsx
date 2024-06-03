"use client";
import React from "react";
import { BodyBase } from "../typography/BodyBase";
import { cx } from "@/utils";

interface TextType {
  name: string;
  label?: string;
  register: any;
  value?: string;
  error?: string;
  type: "text" | "password" | "email" | "checkbox" | "radio";
}

const TextInput = ({
  label,
  name,
  type,
  register,
  error,
  value,
  ...props
}: TextType) => {
  const typeClasses: Record<TextType["type"], string> = {
    radio: "w-2 flex",
    text: "",
    password: "",
    email: "",
    checkbox: "",
  };

  const generatedId = React.useId();
  const appliedId = generatedId;
  return (
    <div className={cx("flex flex-col gap-y-[10px]", typeClasses[type])}>
      <BodyBase
        fontWeight="regular"
        type="label"
        htmlFor={generatedId}
        className="text-sm capitalize"
      >
        {label}
      </BodyBase>
      <input
        value={value}
        className={cx(
          "border px-1 text-gray-700 p-3 w-2 rounded-md outline-primary-500 outline-4 outline-offset-2 shadow-default t",
          typeClasses[type]
        )}
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
