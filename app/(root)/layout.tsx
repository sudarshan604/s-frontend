"use client";
import Header from "@/components/Header/Header";
import AuthenticatePage from "./AuthenticatePage";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AuthenticatePage>
        <section className="h-[calc(100vh-100px)] min-h-[calc(100vh-100px)] pt-3   ">
          {children}
        </section>
      </AuthenticatePage>
    </>
  );
}
