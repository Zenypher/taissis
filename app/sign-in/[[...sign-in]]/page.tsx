import { NavigationBar } from "@/app/components/navbar";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col justify-center items-center pt-10">
        <SignIn path="/sign-in" />
      </div>
    </>
  );
}
