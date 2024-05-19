import React from "react";
import { InmobiliariaInfo } from "../../interfaces/InmobiliariaInfo";

export const CardInmobiliaria = ({
  direccion,
  email,
  nombre,
  telefono,
  status,
  id
}: InmobiliariaInfo) => {
  return (
    <div className="bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{nombre}</h3>
        <div className="flex items-center space-x-2">
          <MapPinIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <p className="text-gray-500 dark:text-gray-400">
            {direccion}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <MailboxIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <p className="text-gray-500 dark:text-gray-400">{email}</p>
        </div>
        <div className="flex items-center space-x-2">
          <PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <p className="text-gray-500 dark:text-gray-400">{telefono}</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full " />
          <p className=" font-medium">{status ? "Aprobado": "No Aprobado" }</p>
        </div>
      </div>
    </div>
  );
};

function MailboxIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
