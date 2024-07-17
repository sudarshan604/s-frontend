"use client";
import React, { useState } from "react";
import Analyze from "./Analyze";
import DateSelect from "./DateSelect";

const AnalyzeWrapper = ({ key }: { key: string }) => {
  const [selectedDate, setSelectedDate] = useState("Current Month");

  console.log("key=", key);
  return (
    <section className="flex flex-col gap-y-32">
      <div className="self-end">
        <DateSelect
          selectedDate={selectedDate}
          onClick={(value) => setSelectedDate(value)}
        />
      </div>

      <Analyze media={"Instagram"} selectedDate={selectedDate} />
    </section>
  );
};

export default AnalyzeWrapper;
