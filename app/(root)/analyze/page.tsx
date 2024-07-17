"use client";
import AnalyzeWrapper from "./__components/AnalyzeWrapper";
const Page = ({
  searchParams,
}: {
  searchParams: {
    key: string;
  };
}) => {
  console.log("kesy=", searchParams.key);
  return <AnalyzeWrapper key={searchParams.key} />;
};

export default Page;
