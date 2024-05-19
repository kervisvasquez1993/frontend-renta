import { useAuthStore } from "@/store/auth.store";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

export const AuthValidate = () => {
  const { data: session, status } = useSession();
  const { user } = useAuthStore();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!user) {
    router.push("/");
    return null;
  }
  return <></>;
};
