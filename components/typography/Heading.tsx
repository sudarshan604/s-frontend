import * as React from "react";
import { cx } from "@/utils";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
  className?: string;
  FontSize?: "heading1" | "heading2" | "heading3" | "heading4" | "heading5";
};

const FontSizeClasses: Record<HeadingProps["FontSize"], string> = {
  heading1: "text-[2.74rem]",
  heading2: "text-[2.19rem]",
  heading3: "text-[1.75rem]",
  heading4: "text-[1.4rem]",
  heading5: "text-[1rem]",
};

export const Heading: React.FC<HeadingProps> = ({
  level = 1,
  children,
  FontSize = "heading3",
  className = "",
}) => {
  const Heading = `h${level}` as React.ElementType;
  return (
    <Heading className={cx(className, FontSizeClasses[FontSize])}>
      {children}
    </Heading>
  );
};
