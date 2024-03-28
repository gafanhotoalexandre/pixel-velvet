import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-imb-plex'
});

export const metadata: Metadata = {
  title: "PixelVelvet",
  description: "Gerador de imagens com Inteligência Artificial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cn("font-IMBPlex antialiased", IBMPlex.variable)}>
        {children}
      </body>
    </html>
  );
}
