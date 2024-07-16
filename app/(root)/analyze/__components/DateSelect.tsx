import { BodyBase } from "@/components/typography/BodyBase";
import React, { useState } from "react";

const DateSelect = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div className="shadow-custom px-2 py-3 cursor-pointer">
      Current Month
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
    </div>
  );
};

export default DateSelect;
