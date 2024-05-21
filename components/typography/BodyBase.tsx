import * as React from "react";

type DefaultProps = {
  className?: string;
  FontSize?: "body" | "bodyS" | "bodyXS" | "bodyXXS";
  fontWeight?: "regular" | "medium" | "bold" | "black";
  type?: "span" | "p" | "label" | "figcaption";
  color?: string;
  htmlFor?: string;
  children: React.ReactNode | string;
};

export const BodyBase: React.FC<DefaultProps> = ({
  fontWeight = "regular",
  type = "p",
  color,
  children,
  className,
  ...props
}) => {
  const BodyBase = type;

  return <BodyBase {...props}>{children}</BodyBase>;
};
