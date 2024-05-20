import React from "react";
interface Props {
  email: string;
  nombre: string;
}
export const CardVendero = ({ email, nombre }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-200">
      <div className="p-6 flex flex-col items-center justify-center">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mb-4">
          <span className="text-2xl font-bold">SM</span>
        </div>
        <h3 className="text-lg font-semibold mb-1">{nombre}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{email}</p>
      </div>
    </div>
  );
};
