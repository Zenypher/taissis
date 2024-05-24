import { NavigationBar } from "@/app/components/navbar";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <section className="h-screen flex items-center justify-center py-6">
        <SignIn path="/sign-in" />
      </section>
    </>
  );
}
