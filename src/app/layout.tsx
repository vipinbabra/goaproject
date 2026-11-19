import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "dfgsdfgsdf sdfg sdfg sdfg sdf dfg sdfg",
  description:
    "zxzsdf sadf asdf asdf asdf sd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-obsidian text-white font-sans antialiased selection:bg-gold selection:text-black">
        {children}
      </body>
    </html>
  );
}
