import React from "react";
import BarChartS from "./BarChart";
import { BodyBase } from "@/components/typography/BodyBase";
const Analyze = () => {
  return (
    <div className=" h-96">
      <div>
        <BodyBase type="p" fontWeight="medium" FontSize="bodyS" className="">
          Metrics insights for
        </BodyBase>
        <select>
          <option>insight</option>
          <option>reach</option>
          <option>impressions</option>
        </select>
      </div>
      <BarChartS />
    </div>
  );
};

export default Analyze;
