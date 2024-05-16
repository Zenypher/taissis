import { UserProfile } from "@clerk/nextjs";
import { NavigationBar } from "../../components/navbar";

export default function Account() {
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col justify-center items-center p-10">
        <UserProfile />
      </div>
    </>
  );
}
