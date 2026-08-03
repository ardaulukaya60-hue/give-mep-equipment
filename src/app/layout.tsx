import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GIVE MEP Equipment",
    template: "%s | GIVE MEP Equipment",
  },
  description:
    "Industrial valves and high- and low-voltage electrical equipment for global engineering procurement.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
