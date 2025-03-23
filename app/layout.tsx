import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BetterStep | Your Steps Have Real Value",
  description:
    "Earn rewards by walking, running, or exercising. Your steps have real value!",
  icons: {
    icon: "/images/swift.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className}  antialiased`}>{children}</body>
    </html>
  );
}
