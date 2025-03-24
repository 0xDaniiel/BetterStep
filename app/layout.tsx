import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BetterStep | Your steps have real value",
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
