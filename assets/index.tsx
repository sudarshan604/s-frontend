import React from "react";
import LoveIcon from "./love";
import CommentIcon from "./comment";
import ChevronIcon from "./chevron";

export interface IconProps {
  width?: number | string;
  color?: string;
  className?: string;
  fill?: string;
  strokeWidth?: string | number;
}
type _IconProps = IconProps & {
  type: "loveIcon" | "commentIcon" | "chevrondown";
};

const Icon = ({ type, color, ...rest }: _IconProps) => {
  color ??= "#5C5F62";

  return (
    <React.Fragment>
      {
        {
          loveIcon: <LoveIcon color={color} {...rest} />,
          commentIcon: <CommentIcon color={color} {...rest} />,
          chevrondown: <ChevronIcon color={color} {...rest} />,
        }[type]
      }
    </React.Fragment>
  );
};

export default Icon;
