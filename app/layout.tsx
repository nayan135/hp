import type { Metadata } from "next";
import { Cinzel_Decorative, Lora } from "next/font/google";
import "./globals.css";
import { MaraudersMapFooter } from "@/components/marauders-map-footer";

const cinzelDecorative = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel",
})

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-lora",
})

export const metadata: Metadata = {
  title: "HP Sorting Hat Experience",
  description: "Lets see if you are a mugggle or just a little bit late for your lettter to hogwarts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-serif ${cinzelDecorative.variable} ${lora.variable}`}
      >
        {children}
        <MaraudersMapFooter />
      </body>
    </html>
  );
}
