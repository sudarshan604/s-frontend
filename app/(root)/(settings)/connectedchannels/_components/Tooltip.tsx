import React from "react";
import { cx } from "@/utils";
const Tooltip = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <div className={cx("bg-white", className)}>{children}</div>;
};

export default Tooltip;
