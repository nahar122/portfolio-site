import type { Metadata } from "next";
import { Quicksand, Mohave } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

const mohave = Mohave({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mohave",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nahar Saias | Software Engineer",
  description: "Software Engineer & Developer from Miami, Florida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={quicksand.variable}>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Software Engineer & Developer from Miami, Florida"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} ${mohave.variable} antialiased bg-light`}
      >
        {children}
      </body>
    </html>
  );
}
