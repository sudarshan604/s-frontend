import * as React from "react";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
  className?: string;
  FontSize?: "heading1" | "heading2" | "heading3" | "heading4";
};

export const Heading: React.FC<HeadingProps> = ({
  level = 1,
  children,
  className,
}) => {
  const Heading = `h${level}` as React.ElementType;
  return <Heading className={className}>{children}</Heading>;
};
