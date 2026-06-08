import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clean It",
  description: "Clean It",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
