import { NavigationBar } from "@/components/navbar";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <section className="h-full flex flex-col justify-center items-center py-6">
        <SignUp path="/sign-up" />
      </section>
    </>
  );
}
