"use client"
import { Button, Input, Textarea } from "@nextui-org/react";
import { useAuth, useUser } from "@clerk/nextjs";
import { Suspense } from "react";
import Loading from "./loading";
import { PhoneIcon, DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

export default function Contact() {
  const {userId} = useAuth();
  const {user} = useUser();

  return (
    <section className="flex lg:flex-row flex-col justify-center items-center h-screen gap-12">
      <div className="h-auto lg:w-1/4 flex flex-col gap-4 p-6 bg-green-50 rounded-xl shadow-xl backdrop-blur-[7.6px]">
        <Suspense fallback={<Loading/>}>
        <h1 className="text-3xl font-bold text-green-600">Formular de contact</h1>
        {!userId ? (
          <div className="flex flex-col gap-y-6">         
          <Input label="Nume" color="success" type="text"/>
          <Input label="Email" color="success" type="email" />
          <Input label="Telefon" color="success" type="" />
          </div>
        ) : (
          <div className="flex flex-col gap-y-6">         
          <Input label="Nume" color="success" type="text" value={user?.firstName + " " + (user?.lastName || "")}/>
          <Input label="Email" color="success" type="email" value={user?.primaryEmailAddress?.toString()}/>
          <Input label="Telefon" color="success" type="" value={user?.phoneNumbers[0]?.toString()}/>
          </div>
        )}
        <Textarea
          placeholder="Mesaj"
          color="success"
        />
        <div className="flex justify-center">
          <Button color="success" className="text-white font-bold w-1/2">
            Trimite
          </Button>
        </div>
        </Suspense>
      </div>
      <div className="h-auto lg:w-1/4 flex flex-col gap-6 p-6 bg-green-50 rounded-xl shadow-xl backdrop-blur-[7.6px]">
        <h1 className="text-3xl font-bold text-green-600">Contact</h1>
        <div className="flex flex-row gap-4 items-center">
          <h2 className="flex flex-row gap-x-4 items-center font-bold text-green-600 text-lg"><PhoneIcon className="size-10"/>Telefon</h2>
          <p className="font-medium">+40 248 512 830</p>
        </div>        
        <div className="flex flex-row gap-4 items-center">
          <h2 className="flex flex-row gap-x-4 items-center font-bold text-green-600 text-lg"><DevicePhoneMobileIcon className="size-10"/>Mobil</h2>
          <p className="font-medium">+40 372 489 000</p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <h2 className="flex flex-row gap-x-4 items-center font-bold text-green-600 text-lg"><EnvelopeIcon className="size-10"/>Email</h2>
          <p className="font-medium">office@taissis.ro</p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <h2 className="flex flex-row gap-x-4 items-center font-bold text-green-600 text-lg"><EnvelopeIcon className="size-10"/>Email</h2>
          <p className="font-medium">vanzari@taissis.ro</p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <h2 className="flex flex-row gap-x-4 items-center font-bold text-green-600 text-lg"><MapPinIcon className="size-10"/>Adresă</h2>
          <p className="font-medium">Str. Ion Ticaloiu, nr. 17, Campulung, 115100</p>
        </div>
      </div>
    </section>
  );
}
