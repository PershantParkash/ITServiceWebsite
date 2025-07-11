import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import ThemeRegistry from "./ThemeRegistry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Premium IT Services | IT Support, Consulting, Azure, Premium Support",
  description: "Professional IT services provider offering IT Support, Consulting, Azure Services, and Premium Support. Modern, reliable, and client-focused solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Professional IT services provider offering IT Support, Consulting, Azure Services, and Premium Support. Modern, reliable, and client-focused solutions." />
        <meta name="keywords" content="IT Services, IT Support, IT Consulting, Azure, Premium Support, Tech Solutions" />
        <meta name="author" content="Premium IT Services" />
        <title>Premium IT Services | IT Support, Consulting, Azure, Premium Support</title>
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
