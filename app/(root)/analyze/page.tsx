import dynamic from "next/dynamic";

// Dynamically import AnalyzeWrapper as a client-side component
const AnalyzeWrapper = dynamic(() => import("./__components/AnalyzeWrapper"), {
  ssr: false,
});

const Page = ({
  searchParams,
}: {
  searchParams: {
    key: string;
  };
}) => {
  return <AnalyzeWrapper searchParams={searchParams} />;
};

export default Page;
