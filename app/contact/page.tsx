"use client"
import { Button, Input, Textarea } from "@nextui-org/react";
import { useAuth, useUser } from "@clerk/nextjs";
import { Suspense } from "react";
import Loading from "./loading";

export default function Contact() {
  const {userId} = useAuth();
  const {user} = useUser();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-auto lg:w-1/4 flex flex-col gap-4 p-6 bg-green-50 rounded-xl shadow-xl backdrop-blur-[7.6px]">
        <Suspense fallback={<Loading/>}>
        <h1 className="text-2xl font-bold text-green-600">Contact</h1>
        {!userId ? (
          <div className="flex flex-col gap-y-6">         
          <Input label="Nume" color="success" type="text"/>
          <Input label="Email" color="success" type="email" />
          <Input label="Telefon" color="success" type="" />
          </div>
        ) : (
          <div>         
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
    </div>
  );
}
