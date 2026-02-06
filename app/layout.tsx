import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wade Fuller - Frontend Engineer",
  description: "Portfolio showcasing modern web development skills",
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
