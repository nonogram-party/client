import { Metadata } from "next";
import { Mali } from "next/font/google";

import { Page } from "types/pages";

import { Navbar } from "components";

import "./globals.css";

const mali = Mali({
  weight: ["600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nonogram Party",
};

export default function RootLayout({ children }: Page) {
  return (
    <html className={`${mali.className} m-0 box-border p-0`}>
      <body className="bg-background-body p-6">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
