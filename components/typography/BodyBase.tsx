import * as React from "react";
import { cx } from "@/utils";

type DefaultProps = {
  className: string;
  FontSize?: "body" | "bodyS" | "bodyXS" | "bodyXXS";
  fontWeight: "regular" | "medium" | "bold";
  type?: "span" | "p" | "label" | "figcaption";
  color?: string;
  htmlFor?: string;
  children: React.ReactNode | string;
};

const WeightClasses: Record<DefaultProps["fontWeight"], string> = {
  bold: "font-bold",
  medium: "font-semibold",
  regular: "font-normal",
};

export const BodyBase: React.FC<DefaultProps> = ({
  fontWeight = "regular",
  type = "p",
  color,
  children,
  className = "",
  ...props
}) => {
  const BodyBase = type;

  return (
    <BodyBase className={cx(className, WeightClasses[fontWeight])} {...props}>
      {children}
    </BodyBase>
  );
};
