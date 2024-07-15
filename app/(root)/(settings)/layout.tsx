import Header from "@/components/Header/Header";
import ChannelSidebar from "./ChannelSidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className="pt-3  flex min-h-full border-r">
        <div className="w-1/5  border-r min-h-full  ">
          <ChannelSidebar />
        </div>
        <div className="w-4/5 pl-6">{children}</div>
      </section>
    </>
  );
}
