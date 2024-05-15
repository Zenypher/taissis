import { Login } from "../components/login-card";
import { NavigationBar } from "../components/navbar";
import { NextUIProvider } from "@nextui-org/react";

export default function Account() {
  return (
    <>
      <NavigationBar />
      <Login />
    </>
  );
}
