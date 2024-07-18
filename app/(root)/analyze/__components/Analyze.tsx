"use client";
import { BodyBase } from "@/components/typography/BodyBase";
import { useConnectedMedia } from "@/hooks/instaFetch";
import axios from "axios";
import { useEffect, useState } from "react";
import BarChartS from "./BarChart";
import AreaCharts from "./AreaCharts";
import { InsightMetrics } from "@/constant/constant";
import { getCurrentMonthRange, getLastMonthRange } from "@/utils/formatdate";

const Analyze = ({
  media,
  selectedDate,
  customDate,
}: {
  media: string;
  selectedDate: string;
  customDate: Array<string>;
}) => {
  const [selectedMetric, SetSelectedMetric] = useState("");
  const [selectedMetricDate, setSelectedMetricDate] = useState<{
    since: string;
    until: string;
  }>(getCurrentMonthRange());
  const [metricData, setMetricData] = useState();
  const [token, setToken] = useState("");
  const { data } = useConnectedMedia();

  useEffect(() => {
    if (selectedDate.toLocaleLowerCase() === "current month") {
      setSelectedMetricDate(getCurrentMonthRange());
    }
    if (selectedDate.toLocaleLowerCase() === "last month") {
      setSelectedMetricDate(getLastMonthRange());
    }
  }, [selectedDate]);

  useEffect(() => {
    const item = data?.find((item) => item.key === media?.toLocaleLowerCase());
    const token = item?.accessToken;
    setToken(token);
  }, [media, data]);

  const fetchMetric = async () => {
    const url = `https://graph.facebook.com/v20.0/17841447341358804/insights?metric=${selectedMetric}&period=day&since=${selectedMetricDate.since}&until=${selectedMetricDate.until}&access_token=${token}`;

    const response = await axios.get(url);
    const data = response.data;
    setMetricData(data.data[0]);
    // SetSelectedMetric("");
  };

  const fetchMetricFacebook = async () => {
    const url = `https://graph.facebook.com/v13.0/341388352389657/insights?metric=${selectedMetric}&access_token=${token}&since=${selectedMetricDate.since}&until=${selectedMetricDate.until}`;
    const response = await axios.get(url);
    const data = response.data;
    console.log("data-", data);
    setMetricData(data.data[0]);
    // SetSelectedMetric("");
  };

  useEffect(() => {
    if (selectedMetric && media === "Instagram") fetchMetric();
    if (selectedMetric && media === "Facebook") fetchMetricFacebook();
  }, [selectedMetric, media, selectedDate]);

  return (
    <div className=" h-96">
      <div className="flex gap-x-2 mb-6">
        <BodyBase type="p" fontWeight="medium" FontSize="bodyS" className="">
          Metrics insights for
        </BodyBase>
        <select
          onChange={(e) => {
            SetSelectedMetric(e.target.value);
          }}
        >
          {InsightMetrics.map((item) => {
            return (
              item.platform == media?.toLocaleLowerCase() && (
                <option key={item.key + item.platform} value={item.key}>
                  {item.label}
                </option>
              )
            );
          })}
        </select>
      </div>
      {selectedMetric !== "page_fans" && <BarChartS data={metricData} />}
      {selectedMetric === "page_fans" && <AreaCharts data={metricData} />}
    </div>
  );
};

export default Analyze;
