import React from "react";
import { cx } from "@/utils";
const Tooltip = ({
  children,
  className,
  isTooKipOpen,
}: {
  children: React.ReactNode;
  className: string;
  isTooKipOpen: boolean;
}) => {
  if (!isTooKipOpen) return;
  return (
    <div className={cx("bg-white shadow-custom", className)}>{children}</div>
  );
};

export default Tooltip;
