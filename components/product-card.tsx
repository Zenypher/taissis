"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
  Button,
  CircularProgress,
} from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export function ProductCard(props: any) {
  const [value, setValue] = useState(0);

  return (
    <Card key={props.key} className="w-full h-full bg-green-50">
      <CardHeader className="p-4 lg:text-xl font-bold text-green-500 text-sm">
        {props.title}
      </CardHeader>
      <CardBody
        className="items-center justify-center"
        as={Link}
        href={props.link}
      >
        <Image
          isZoomed
          src={props.image}
          width={300}
          alt="Card Logo"
          className="w-full"
        />
      </CardBody>
      <CardFooter className="flex lg:px-10 gap-x-4 justify-between">
        <h2 className="text-green-600 font-medium lg:text-xl text-sm">
          <span className="font-bold">Preț</span>: {props.price} RON
        </h2>
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
