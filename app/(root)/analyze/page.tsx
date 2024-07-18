"use client";
import AnalyzeWrapper from "./__components/AnalyzeWrapper";
const Page = ({
  searchParams,
}: {
  searchParams: {
    key: string;
  };
}) => {
  return <AnalyzeWrapper key={searchParams} />;
};

export default Page;
