"use client";
import { BodyBase } from "@/components/typography/BodyBase";
import { useConnectedMedia } from "@/hooks/instaFetch";
import axios from "axios";
import { useEffect, useState } from "react";
import BarChartS from "./BarChart";
import AreaCharts from "./AreaCharts";
import { InsightMetrics } from "@/constant/constant";

const Analyze = ({ media }: { media: string }) => {
  const [selectedMetric, SetSelectedMetric] = useState("");
  const [metricData, setMetricData] = useState();
  const [token, setToken] = useState("");
  const { data } = useConnectedMedia();

  useEffect(() => {
    const item = data?.find((item) => item.key === media?.toLocaleLowerCase());
    const token = item?.accessToken;
    setToken(token);
  }, [media, data]);

  const fetchMetric = async () => {
    const url = `https://graph.facebook.com/v20.0/17841447341358804/insights?metric=${selectedMetric}&period=day&since=2024-06-01T00:00:00Z&until=2024-06-30T23:59:59Z&access_token=${token}`;

    const response = await axios.get(url);
    const data = response.data;
    setMetricData(data.data[0]);
    // SetSelectedMetric("");
  };

  const fetchMetricFacebook = async () => {
    const url = `https://graph.facebook.com/v13.0/341388352389657/insights?metric=${selectedMetric}&access_token=${token}&since=2024-06-01T00:00:00Z&until=2024-06-30T23:59:59Z`;
    const response = await axios.get(url);
    const data = response.data;
    console.log("data-", data);
    setMetricData(data.data[0]);
    // SetSelectedMetric("");
  };

  useEffect(() => {
    if (selectedMetric && media === "Instagram") fetchMetric();
    if (selectedMetric && media === "Facebook") fetchMetricFacebook();
  }, [selectedMetric, media]);

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
