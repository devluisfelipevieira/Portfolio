import type { Metadata } from "next";
import { Bruno_Ace } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header";

const brunoAce = Bruno_Ace({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luis Felipe Vieira",
  description: "Portifólio de programador",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={brunoAce.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
