import Header from "@/components/Header/Header";
import AnalyzeSidebar from "./__components/AnalyzeSidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className="pt-6 ml-6 flex min-h-full   border-r ">
        <div className="pr-6 border-r min-h-full">
          <AnalyzeSidebar />
        </div>
        <div className="w-4/5 pl-6">{children}</div>
      </section>
    </>
  );
}
