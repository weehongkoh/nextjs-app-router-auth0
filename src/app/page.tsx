import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center gap-y-8">
      <h1 className="font-bold text-6xl text-transparent leading-normal bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Next.js 14 + Auth0 App Router
      </h1>
      <Button asChild>
        <Link href="/protected">Go to Protected Page</Link>
      </Button>
    </main>
  );
}
