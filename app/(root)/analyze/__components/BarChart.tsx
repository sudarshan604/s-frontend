"use client";
import { BodyBase } from "@/components/typography/BodyBase";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
interface PropsInterface {
  name: string;
  period: string;
  values: Array<{
    value: number;
    end_time: string;
  }>;
  title: string;
  description: string;
  id: string;
}
const BarCharts = ({ data }: { data: PropsInterface }) => {
  function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    const options = { month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  const formattedData = data?.values.map((item) => ({
    ...item,
    end_time: formatDate(item.end_time),
  }));

  console.log(formattedData);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={formattedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis
          dataKey="end_time"
          scale="point"
          padding={{ left: 10, right: 10 }}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarCharts;
