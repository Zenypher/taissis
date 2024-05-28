"use client";
import {
  DropdownTrigger,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Button,
  Link,
} from "@nextui-org/react";
import { useState } from "react";
import { CategoryList } from "../utils/products";

export function ProductsDropdownWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<any>(null);
  const delay = 1000;

  return (
    <Dropdown isOpen={isOpen}>
      <DropdownTrigger>
        <Button
          onMouseEnter={() => {
            clearTimeout(timeoutId);
            setIsOpen(true);
          }}
          onMouseLeave={() => {
            const id = setTimeout(() => setIsOpen(false), delay);
            setTimeoutId(id);
          }}
          variant="light"
          color="success"
          className="font-medium text-[16px]"
          as={Link}
          href="/products"
        >
          Produse
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Produse"
        onMouseEnter={() => {
          clearTimeout(timeoutId);
          setIsOpen(true);
        }}
        onMouseLeave={() => {
          setIsOpen(false);
        }}
      >
        {CategoryList.map((value) => (
          <DropdownItem
            key={`${value.title}`}
            as={Link}
            color="success"
            className="text-success text-medium"
            href={value.link}
          >
            {value.title}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
