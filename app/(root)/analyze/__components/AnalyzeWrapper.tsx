"use client";
import React, { useState } from "react";
import Analyze from "./Analyze";
import DateSelect from "./DateSelect";
import Calendar from "react-calendar";
const AnalyzeWrapper = (key) => {
  const [selectedDate, setSelectedDate] = useState("Current Month");
  const [customDate, setCustomDate] = useState<any>("");

  return (
    <section className="flex  flex-col gap-y-48">
      <div className="relative border border-red-50">
        <div className="self-end absolute right-0 z-10">
          <DateSelect
            selectedDate={selectedDate}
            onClick={(value) => {
              setCustomDate("");
              setSelectedDate(value);
            }}
          />

          {!customDate && selectedDate.toLocaleLowerCase() === "customize" && (
            <Calendar
              selectRange
              showDoubleView
              onChange={setCustomDate}
              value={customDate}
            />
          )}
        </div>
      </div>

      <Analyze
        media={"Facebook"}
        selectedDate={selectedDate}
        customDate={customDate}
      />
    </section>
  );
};

export default AnalyzeWrapper;
