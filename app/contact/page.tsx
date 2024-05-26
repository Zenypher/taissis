"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";

export default function Contact() {
  const [textValue, setTextValue] = useState("");

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-auto lg:w-1/4 flex flex-col gap-4 p-6 bg-green-50 rounded-xl shadow-xl backdrop-blur-[7.6px]">
        <h1 className="text-2xl font-bold text-green-600">Contact</h1>
        <Input label="Nume" color="success" type="text" />
        <Input label="Email" color="success" type="email" />
        <Textarea
          placeholder="Scrie cv aici"
          color="success"
          value={textValue}
        />
        <div className="flex justify-center">
          <Button color="success" className="text-white font-bold w-1/2">
            Trimite
          </Button>
        </div>
      </div>
    </div>
  );
}
