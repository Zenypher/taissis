"use client";
import Image from "next/image";
import Logo from "../public/assets/logo.svg";
import { UserIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
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
  Badge,
  Switch,
} from "@nextui-org/react";
import { ProductsDropdownWrapper } from "./products-dropdown-wrapper";
import { MenuItems } from "../utils/menu-items";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

export function NavigationBar() {
  const { isSignedIn } = useUser();

  return (
    <Navbar shouldHideOnScroll>
      <NavbarMenuToggle className="lg:hidden"/>
      <NavbarBrand>
        <NavbarItem as={Link} href="/" className="hidden lg:flex">
          <Image src={Logo} alt="Logo" className="w-[100px]" />
        </NavbarItem>
        <NavbarItem
          as={Link}
          href="/"
          className="flex lg:hidden font-bold text-[32px] text-green-600"
        >
          Taissis
        </NavbarItem>
      </NavbarBrand>
      <NavbarContent className="hidden lg:flex gap-x-[20px]" justify="center">
        <NavbarItem>
          <ProductsDropdownWrapper />
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
            content={null}
            color="success"
            className="text-white"
            shape="rectangle"
          >
            <Tooltip content="Coșul meu" delay={1000} closeDelay={0}>
              <Button
                color="success"
                variant="light"
                as={Link}
                href="/shopping-cart"
                className="flex justify-center"
              >
                <ShoppingCartIcon className="text-green-500" />
              </Button>
            </Tooltip>
          </Badge>
        </NavbarItem>
        <NavbarItem>
          {!isSignedIn ? (
            <Tooltip content="Contul meu" delay={1000} closeDelay={0}>
            <Button
              color="success"
              variant="light"
              className="flex justify-center"
              as={Link}
              href="/sign-in"
            >
              <UserIcon className="text-green-500" />
            </Button>
          </Tooltip>
          ) : (
            <div className="px-4"><UserButton/></div>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="pt-[20px] gap-y-[16px]">
        {MenuItems.map((item) => (
          <NavbarMenuItem key={`${item.title}`}>
            <Link className="text-green-500 w-full" href={item.link} size="lg">
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
