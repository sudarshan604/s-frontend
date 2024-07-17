"use client";
import { BodyBase } from "@/components/typography/BodyBase";
import React, { useState } from "react";

interface DateSelectProps {
  selectedDate: string;
  onClick: (value: string) => void;
}

const DateSelect = ({ selectedDate, onClick }: DateSelectProps) => {
  const [selectedValue, setSelectedValue] = useState({
    label: "",
    isOpen: false,
  });

  return (
    <div
      onClick={() => {
        setSelectedValue((prevData) => {
          return {
            ...prevData,
            isOpen: !prevData.isOpen,
          };
        });
      }}
      className="shadow-custom px-3 py-3 cursor-pointer rounded-md "
    >
      {selectedDate}
      {selectedValue.isOpen && (
        <div>
          <BodyBase
            className={""}
            fontWeight={"bold"}
            onClick={() => onClick("last month")}
          >
            last month
          </BodyBase>
          <BodyBase
            className={""}
            fontWeight={"bold"}
            onClick={() => onClick("Current Month")}
          >
            Current Month
          </BodyBase>
          <BodyBase
            className={""}
            fontWeight={"bold"}
            onClick={() => onClick("Customize")}
          >
            customize
          </BodyBase>
        </div>
      )}
    </div>
  );
};

export default DateSelect;
