import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/system";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taissis",
  description: "Proiect realizat de Sebastian Iosif - Grupa 1044A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider className="bg-gradient-to-bl from-slate-100 to-green-300">
          <NextThemeProvider defaultTheme="light">
            <ClerkProvider>{children}</ClerkProvider>
          </NextThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
