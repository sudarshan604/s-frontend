"use client";
import React, { ChangeEvent } from "react";

interface TextType {
  // id?: string | number;
  label: string;
  type: "text" | "password";
  value: string;
  onchange: (e: ChangeEvent) => void;
}

const TextInput = ({ label, value, type, onchange, ...props }: TextType) => {
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
        value={value}
        onChange={onchange}
      />
    </div>
  );
};

export default TextInput;
