import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <svg
            className="h-8 w-8 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
              fill="currentColor"
            />
            <path
              d="M12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12Z"
              fill="currentColor"
            />
          </svg>
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
            <Link href={"/login"} className="hover:text-gray-400">
              Sing In
            </Link>
            <li>
              <Link href={"/register"} className="hover:text-gray-400">
                Sing up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
