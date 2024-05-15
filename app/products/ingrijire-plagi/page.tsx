import { NavigationBar } from "@/app/components/navbar";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export default function IngrijirePlagi() {
  return (
    <>
      <NavigationBar />
      <section className="flex p-6 justify-center text-center">
        <h1 className="font-bold text-[32px]">
          Asta e un titlu pentru Ingrijire Plagi
        </h1>
      </section>
    </>
  );
}
