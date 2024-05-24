import Header from "@/components/Header/Header";
import ThemeSwitcher from "@/components/theme-switcher";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeSwitcher />
        <Header />
        {children}
      </body>
    </html>
  );
}
