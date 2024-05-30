import AuthenticatePage from "./Authenticate";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AuthenticatePage>{children}</AuthenticatePage>
    </>
  );
}
