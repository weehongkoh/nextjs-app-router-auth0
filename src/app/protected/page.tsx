import UserProfile from "@/components/UserProfile";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(
  async function Protected() {
    return (
      <main className="w-screen h-screen flex flex-col justify-center items-center gap-y-8">
        <h1 className="text-6xl font-bold">Protected Route</h1>
        <UserProfile />
      </main>
    );
  },
  { returnTo: "/protected" }
);
