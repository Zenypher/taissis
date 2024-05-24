"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
  Button,
} from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export function ProductCard(props: any) {
  const [value, setValue] = useState(0);

  return (
    <Card key={props.key} className="w-full h-full">
      <CardHeader className="p-4 lg:text-xl font-bold text-green-500 text-sm">
        {props.title}
      </CardHeader>
      <CardBody
        className="items-center justify-center lg:gap-x-4 gap-y-2"
        as={Link}
        href={props.link}
      >
        <Image
          src={props.image}
          width={400}
          alt="Card Logo"
          className="w-full"
        />
      </CardBody>
      <CardFooter className="hidden lg:flex pl-4 justify-between">
        <h2 className="text-green-600 font-medium text-xl">
          Preț: {props.price} RON
        </h2>
        <h3>Compoziție: {props.composition}</h3>
        <Button
          color="success"
          className="text-white font-semibold"
          value={value}
        >
          <ShoppingBagIcon />
        </Button>
      </CardFooter>
    </Card>
  );
}
