import { FileTextIcon, HomeIcon, MailIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useAuthStore } from "../../store/auth.store";

export const SidebarAdmin = () => {
  const user = useAuthStore((state) => state.user);
  return (
    <div className="flex-1 overflow-auto py-2">
      <nav className="grid items-start px-4 text-sm font-medium">
        <Link
          className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
          href="/auth"
        >
          <HomeIcon className="h-4 w-4" />
          Inicio
        </Link>

        {user?.role == "admin" && (
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/auth/inmobiliaria-solicitudes"
          >
            <FileTextIcon className="h-4 w-4" />
            Solicitudes
          </Link>
        )}

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
          href="/auth/me"
        >
          <UserIcon className="h-4 w-4" />
          Perfil
        </Link>
      </nav>
    </div>
  );
};
