import React from "react";
import { BodyBase } from "../typography/BodyBase";
import { cx } from "@/utils";
interface FormInterface {
  children: React.ReactNode;
  title: string;
  className?: string;
  handleSubmit: () => void;
}

const Form = ({
  title,
  children,
  handleSubmit,
  className = "",
}: FormInterface) => {
  return (
    <article className={cx(className)}>
      <div>
        <BodyBase
          fontWeight="regular"
          className="text-center font-semibold text-lg uppercase"
        >
          {title}
        </BodyBase>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {children}
      </form>
    </article>
  );
};

export default Form;
