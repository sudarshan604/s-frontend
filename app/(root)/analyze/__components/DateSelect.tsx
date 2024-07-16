import { BodyBase } from "@/components/typography/BodyBase";
import React, { useState } from "react";

const DateSelect = () => {
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
      Current Month
      {selectedValue.isOpen && (
        <div>
          <BodyBase className={""} fontWeight={"bold"}>
            last month
          </BodyBase>
          <BodyBase className={""} fontWeight={"bold"}>
            this Month
          </BodyBase>
          <BodyBase className={""} fontWeight={"bold"}>
            customize
          </BodyBase>
        </div>
      )}
    </div>
  );
};

export default DateSelect;
