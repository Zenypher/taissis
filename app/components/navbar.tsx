import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import UserIcon from "../../public/assets/user.svg";
import Menu from "../../public/assets/menu.svg";

const navLinks = [{ name: "Produse" }, { name: "Despre" }, { name: "Contact" }];

export function Navbar() {
  return (
    <div className="flex w-full px-[32px] py-[20px] justify-between items-center lg:px-[60px] lg:mx-auto">
      <Image src={Logo} alt="Logo" className="w-[48px] cursor-pointer" />
      <div className="hidden lg:flex pl-[40px] gap-x-4">
        {navLinks.map((item, index) => (
          <p
            key={index}
            className="p-2 font-medium text-lime-800 hover:bg-lime-400 cursor-pointer rounded-[6px]"
          >
            {item.name}
          </p>
        ))}
      </div>
      <div className="flex justify-items-center items-center gap-4">
        <Image
          src={UserIcon}
          alt="User Icon"
          className="w-[48px] cursor-pointer"
        />
        <Image
          src={Menu}
          alt="Menu"
          className="w-[48px] cursor-pointer lg:hidden"
        />
      </div>
    </div>
  );
}
