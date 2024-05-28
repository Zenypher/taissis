import { SignIn } from "@clerk/nextjs";
import { CircularProgress } from "@nextui-org/react";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <section className="h-screen flex items-center justify-center py-6">
        <Suspense fallback={<CircularProgress color="success" aria-label="loading"/>}>
        <SignIn path="/sign-in" />
        </Suspense>
      </section>
    </>
  );
}
