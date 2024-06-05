import React from "react";

export const getDisplayedValue = (value: string, children: React.ReactNode) => {
  const childArray = React.Children.toArray(children);

  const selectedChild = childArray.find((child) => {
    if (React.isValidElement(child)) {
      return child.props.value === value;
    }
  });

  if (selectedChild && React.isValidElement(selectedChild)) {
    return selectedChild.props.value;
  }

  return null;
};
