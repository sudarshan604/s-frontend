import React from "react";
import { BodyBase } from "../typography/BodyBase";
interface FormInterface {
  children: React.ReactNode;
  title: string;
  handleSubmit: () => void;
}

const Form = ({ title, children, handleSubmit }: FormInterface) => {
  return (
    <article className="p-4 w-1/2  max-w-xl mx-auto flex flex-col gap-4  border-red-500 border">
      <div>
        <BodyBase>{title}</BodyBase>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {children}
      </form>
    </article>
  );
};

export default Form;
