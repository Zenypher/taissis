import { Hero } from "./components/hero";
import { NavigationBar } from "./components/navbar";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Hero />
    </>
  );
}
