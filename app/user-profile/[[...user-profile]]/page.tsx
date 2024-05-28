import { UserProfile } from "@clerk/nextjs";
import { CircularProgress } from "@nextui-org/react";
import { Suspense } from "react";

export default function Account() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-10">
        <Suspense fallback={<CircularProgress>Loading</CircularProgress>}>
          <UserProfile />
        </Suspense>
      </div>
    </>
  );
}
