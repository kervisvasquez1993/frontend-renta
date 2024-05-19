import { FileTextIcon, HomeIcon, MailIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export const SidebarAdmin = () => {
  return (
    <div className="flex-1 overflow-auto py-2">
      <nav className="grid items-start px-4 text-sm font-medium">
        <Link
          className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
          href="#"
        >
          <HomeIcon className="h-4 w-4" />
          Mis propiedades
        </Link>
        <Link
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          <FileTextIcon className="h-4 w-4" />
          Mis solicitudes
        </Link>
        <Link
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          <MailIcon className="h-4 w-4" />
          Mensajes
        </Link>
        <Link
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          <UserIcon className="h-4 w-4" />
          Perfil
        </Link>
      </nav>
    </div>
  );
};
