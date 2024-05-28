"use client";
import { UserIcon, ShoppingCartIcon, ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";
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
  Image,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/react";
import { ProductsDropdownWrapper } from "./products-dropdown-wrapper";
import { MenuItems } from "../utils/menu-items";
import { useUser, useClerk } from "@clerk/nextjs";
import { useState } from "react";
import { NavbarLogoWrapper } from "./navbar-logo-wrapper";

export function NavigationBar() {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<any>(null);

  return (
    <Navbar shouldHideOnScroll>
      <NavbarMenuToggle className="lg:hidden"/>
      <NavbarBrand as={Link} href="/">
        <NavbarItem className="hidden lg:flex">
          <NavbarLogoWrapper />
        </NavbarItem>
        <NavbarItem
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
            <Dropdown isOpen={isOpen} className="hidden lg:flex">
              <DropdownTrigger>
            <Button
              onMouseEnter={() => {
                clearTimeout(timeoutId);
                setIsOpen(true);
              }}
              onMouseLeave={() => {
                const id = setTimeout(() => setIsOpen(false), 500);
                setTimeoutId(id);
              }}
              color="success"
              variant="light"
              className="flex justify-center"
              as={Link}
              href="/user-profile"
            >
              <Image src={user.imageUrl} alt="Profile Picture" width={32} height={32} className="rounded-full"/>
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
              }}>
                <DropdownItem className="text-green-500" as={Link} href="/user-profile" color="success" startContent={<UserIcon className="size-6"/>}>Contul meu</DropdownItem>
                <DropdownItem onClick={() => signOut({redirectUrl: "/"})} color="danger" className="text-green-500"
                startContent={<ArrowLeftStartOnRectangleIcon className="size-6"/>}>Sign out</DropdownItem>
            </DropdownMenu>
            </Dropdown>
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
