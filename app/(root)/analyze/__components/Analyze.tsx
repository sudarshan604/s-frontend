"use client";
import React, { useEffect, useState } from "react";
import BarChartS from "./BarChart";
import { BodyBase } from "@/components/typography/BodyBase";
import { useConnectedMedia, useGetInstaUser } from "@/hooks/instaFetch";
import { useGetUserPlatForm } from "@/utils/Auth";
import axios from "axios";

const Analyze = () => {
  const [selectedMetric, SetSelectedMetric] = useState("");
  const [metricData, setMetricData] = useState();
  // const { data } = useGetInstaUser();
  // const { data } = useConnectedMedia();
  const { data } = useGetUserPlatForm();

  const fetchMetric = async () => {
    const url = `https://graph.facebook.com/v20.0/17841447341358804/insights?metric=${selectedMetric}&period=days_28&since=2024-06-01T00:00:00Z&until=2024-06-30T23:59:59Z&access_token=EAAFKmWPjmZCQBO1a4cBvD0ZBWI9k7bSlYaU7HUeTkTVhjT3XdHysORNZBfvn08LnyoSzbIFZBxhNh3MzILI0GvuNcpMf1ib6kXRDAnIoqrzMRHN0QNoXaSLmtWYlQZBKnOWUk8XP26UBjmzWKdbh6CqJmmKeCDZAY12KBhaEGtbB5MZBj9AVmfxCxPt3w9meCbZB7tfrLS6IQpzEHEZBG2gZDZD`;

    const response = await axios.get(url);
    const data = response.data;
    setMetricData(data.data[0]);
    SetSelectedMetric("");
  };

  useEffect(() => {
    if (selectedMetric) fetchMetric();
  }, [selectedMetric]);

  console.log(metricData);

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
          <option value="reach">reach</option>
          <option value="impressions">impressions</option>
        </select>
      </div>
      <BarChartS data={metricData} />
    </div>
  );
};

export default Analyze;
