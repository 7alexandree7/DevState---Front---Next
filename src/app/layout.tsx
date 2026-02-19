import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevState",
  description: "DevState by 7alexandree7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
