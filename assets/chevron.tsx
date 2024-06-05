import { Fragment } from "react";
import { IconProps } from ".";

const ChevronIcon = ({
  width,
  color,
  className,
  fill,
  strokeWidth,
}: IconProps) => {
  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || "24"}
        height={width || "24"}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color || "currentColor"}
        strokeWidth={strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </Fragment>
  );
};

export default ChevronIcon;
