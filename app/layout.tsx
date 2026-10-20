import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const Instru = Instrument_Serif({
  variable: "--font-Instru",  
  weight: ["400"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ha Binh",
  description: "Ha Binh Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${Instru.variable} ${Instru.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        {children}
      </body>
    </html>
  );
}
