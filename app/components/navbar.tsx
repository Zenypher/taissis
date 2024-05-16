"use client";
import Image from "next/image";
import Logo from "../../public/assets/logo.svg";
import UserIcon from "../../public/assets/user.svg";
import ShoppingCart from "../../public/assets/shopping-cart.svg";
import { useState } from "react";
import {
  Tooltip,
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Badge,
} from "@nextui-org/react";
import { SignedIn, SignedOut, UserButton, UserProfile } from "@clerk/nextjs";

export function NavigationBar() {
  const menuItems = ["Produse", "Despre", "Contact"];
  const productItems = [
    "Îngrijirea Plăgii",
    "Bloc Operator",
    "Prim Ajutor",
    "Produse Cosmetice",
    "Terapia Durerii",
    "Îngrijire ORL",
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<any>(null);
  const delay = 1000;

  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} className="">
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="lg:hidden"
      />
      <NavbarBrand>
        <NavbarItem as={Link} href="/" className="hidden lg:flex">
          <Image src={Logo} alt="Logo" className="w-[100px]" />
        </NavbarItem>
        <NavbarItem
          as={Link}
          href="/"
          className="flex lg:hidden font-bold text-[32px] text-lime-600"
        >
          Taissis
        </NavbarItem>
      </NavbarBrand>
      <NavbarContent className="hidden lg:flex gap-x-[20px]" justify="center">
        <NavbarItem>
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
              {productItems.map((value, index) => (
                <DropdownItem
                  key={`${value}-${index}`}
                  as={Link}
                  color="success"
                  className="text-success text-medium"
                  href="/products/ingrijire-plagi"
                >
                  {value}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem isActive={true}>
          <Button
            variant="light"
            color="success"
            className="font-medium text-[16px]"
            as={Link}
            href="/about"
          >
            Despre
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            variant="light"
            color="success"
            className="font-medium text-[16px]"
            as={Link}
            href="/contact"
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Badge
            content="69"
            color="success"
            className="text-white"
            shape="rectangle"
          >
            <Tooltip content="Coșul meu" delay={1000}>
              <Button
                color="default"
                variant="light"
                as={Link}
                href="#"
                className="flex justify-center"
              >
                <Image
                  src={ShoppingCart}
                  alt="Shopping Cart"
                  className="w-[40px]"
                />
              </Button>
            </Tooltip>
          </Badge>
        </NavbarItem>
        <NavbarItem>
          <Tooltip content="Contul meu" delay={1000}>
            <Button
              color="default"
              variant="light"
              className="flex justify-center"
              as={Link}
              href="/sign-in"
            >
              <Image src={UserIcon} alt="Account" className="w-[48px]" />
            </Button>
          </Tooltip>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="pt-[20px] gap-y-[16px]">
        {menuItems.map((item) => (
          <NavbarMenuItem key={`${item}`}>
            <Link className="text-lime-500 w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
