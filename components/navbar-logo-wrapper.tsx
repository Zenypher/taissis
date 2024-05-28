import Image from "next/image";
import Logo from "@/public/assets/logo.svg";


export function NavbarLogoWrapper() {
    return <Image src={Logo} alt="Logo" className="w-[100px]"/>
}