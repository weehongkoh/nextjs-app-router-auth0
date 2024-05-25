"use client";

import Link from "next/link";

import { useUser } from "@auth0/nextjs-auth0/client";

import { Button } from "@/components/ui/button";

export default function UserProfile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div className="flex flex-col items-center">
        <p>
          Welcome <span className="font-bold">{user.name}</span>!
        </p>
        <Button className="mt-8" asChild>
          <Link href="/api/auth/logout">Logout</Link>
        </Button>
      </div>
    );
  }
}
