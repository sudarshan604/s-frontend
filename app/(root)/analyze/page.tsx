"use client";
import React from "react";
import Analyze from "./__components/Analyze";

const page = ({
  searchParams,
}: {
  searchParams: {
    key: string;
  };
}) => {
  return (
    <div>
      <Analyze media={searchParams.key} />
    </div>
  );
};

export default page;
