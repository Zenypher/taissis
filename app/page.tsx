import { NavigationBar } from "./components/navbar";
import Logo from "../public/assets/logo.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col justify-center items-center">
        <Image src={Logo} alt="Logo-ul companiei" className="w-1/2" />
      </div>
    </>
  );
}
