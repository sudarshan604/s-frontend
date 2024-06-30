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
const FontSizeClasses: Record<DefaultProps["FontSize"], string> = {
  body: "text-[1.25rem]",
  bodyS: "text-base",
  bodyXS: "text-[0.9rem]",
  bodyXXS: "text-[0.72rem]",
};

export const BodyBase: React.FC<DefaultProps> = ({
  fontWeight = "regular",
  type = "p",
  color,
  children,
  FontSize = "bodyS",
  className = "",
  ...props
}) => {
  const BodyBase = type;

  return (
    <BodyBase
      className={
        (cx(WeightClasses[fontWeight]), FontSizeClasses[FontSize], className)
      }
      {...props}
    >
      {children}
    </BodyBase>
  );
};
