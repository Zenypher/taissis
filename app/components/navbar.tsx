"use client";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import UserIcon from "../../public/assets/user.svg";
import ShoppingCart from "../../public/assets/shopping-cart.svg";
import React from "react";
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
} from "@nextui-org/react";

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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} className="">
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="lg:hidden"
      />
      <NavbarBrand>
        <NavbarItem as={Link} href="/" className="hidden lg:flex">
          <Image src={Logo} alt="Logo" className="w-[60px]" />
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
        <Tooltip
          placement={"bottom"}
          offset={110}
          closeDelay={2000}
          content={
            <Dropdown>
              <DropdownMenu>
                {productItems.map((item, index) => (
                  <DropdownItem
                    key={`${item}-${index}`}
                    as={Link}
                    href="/products/ingrijire-plagi"
                    className="text-green-500"
                  >
                    {item}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          }
        >
          <NavbarItem>
            <Button
              variant="light"
              color="success"
              className="font-medium text-[16px]"
              as={Link}
              href="/products"
            >
              Produse
            </Button>
          </NavbarItem>
        </Tooltip>
        <NavbarItem isActive={true}>
          <Button
            variant="light"
            color="success"
            className="font-medium text-[16px]"
            as={Link}
            href="#"
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
            href="#"
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
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
        </NavbarItem>
        <NavbarItem>
          <Tooltip content="Contul meu" delay={1000}>
            <Button
              color="default"
              variant="light"
              as={Link}
              href="/account"
              className="flex justify-center"
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
