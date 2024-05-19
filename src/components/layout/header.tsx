import { useAuthStore } from "@/store/auth.store";
import { HomeIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

export const Header = () => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);

  console.log(user);
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <HomeIcon className="h-6 w-6" />
          <Link href={"/"} className="text-2xl font-bold">
            Property Finder
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a className="hover:text-gray-400" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="#">
                Buy
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="#">
                Rent
              </a>
            </li>
            {user ? (
              <>
                <li>
                  <span>{user.name}</span>
                </li>
                <li
                  onClick={() => {
                    signOut();
                    setUser(null);
                    setToken("");
                  }}
                >
                  Cerrar sesion
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href={"/login"} className="hover:text-gray-400">
                    Sing In
                  </Link>
                </li>
                <li>
                  <Link href={"/register"} className="hover:text-gray-400">
                    Sing up
                  </Link>
                </li>
              </>
            )}
            <li></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
