import { SignUp } from "@clerk/nextjs";
import { CircularProgress } from "@nextui-org/react";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <section className="h-full flex flex-col justify-center items-center py-6">
        <Suspense fallback={<CircularProgress color="success" aria-label="loading"/>}>
        <SignUp path="/sign-up" />  
        </Suspense>
      </section>
    </>
  );
}
