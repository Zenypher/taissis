import { NextUIProvider } from "@nextui-org/react";
import { NavigationBar } from "../components/navbar";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export default function Products() {
  return (
    <NextUIProvider>
      <NextThemeProvider attribute="class" defaultTheme="light">
        <NavigationBar />
      </NextThemeProvider>
    </NextUIProvider>
  );
}
