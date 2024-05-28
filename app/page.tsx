import Logo from "../public/assets/logo.svg";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <section className="h-fill flex flex-col justify-center items-center p-6 lg:p-16">
      <div className="flex lg:flex-row flex-col h-auto w-auto bg-green-50 rounded-3xl shadow-2xl backdrop-blur-[7.6px]">
        <Image src={Logo} alt="Logo-ul companiei" className="lg:w-1/2" />
        <div className="flex flex-col p-6 lg:p-10 gap-y-10 justify-center">
          <h1 className="text-3xl font-bold text-green-600">
            Inovație în Serviciul Sănătății
          </h1>
          <h2 className="font-medium text-xl text-green-500">
            Echipamente Medicale de Ultimă Generație pentru un Viitor Mai
            Sănătos
          </h2>
          <p>
            La Taissis, ne dedicăm furnizării de soluții medicale avansate care
            îmbunătățesc calitatea vieții și sprijină profesioniștii din
            domeniul sănătății în fiecare zi. Descoperiți gama noastră completă
            de echipamente, concepute pentru a răspunde celor mai exigente
            standarde de siguranță și eficiență.
          </p>
          <div className="flex items-center justify-center">
            <Button
              as={Link}
              href="/products"
              color="success"
              className="text-white font-bold lg:w-1/2 w-full"
            >
              Explorați
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
