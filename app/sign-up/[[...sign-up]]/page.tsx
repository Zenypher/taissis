import { NavigationBar } from "@/app/components/navbar";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col justify-center items-center pt-10">
        <SignUp path="/sign-up" />
      </div>
    </>
  );
}
