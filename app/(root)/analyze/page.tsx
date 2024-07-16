"use client";
import React from "react";
import Analyze from "./__components/Analyze";
import DateSelect from "./__components/DateSelect";
const page = ({
  searchParams,
}: {
  searchParams: {
    key: string;
  };
}) => {
  return (
    <section className="flex flex-col gap-y-32">
      <div className="self-end">
        <DateSelect />
      </div>

      <Analyze media={searchParams.key} />
    </section>
  );
};

export default page;
