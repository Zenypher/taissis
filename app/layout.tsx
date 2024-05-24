import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/system";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { NavigationBar } from "./components/navbar";
import { Footer } from "./components/footer";

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
      <body className={`${inter.className} antialiased`}>
        <NextUIProvider className="bg-gradient-to-bl from-slate-100 to-green-300">
          <NextThemeProvider defaultTheme="light">
            <ClerkProvider>
              <NavigationBar />
              {children}
              <Footer />
            </ClerkProvider>
          </NextThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
