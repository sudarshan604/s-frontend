import Header from "@/components/Header/Header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <section className="h-[calc(100vh-100px)] min-h-[calc(100vh-100px)]  border ">
        {children}
      </section>
    </>
  );
}
