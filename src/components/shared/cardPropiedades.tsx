import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export const cardPropiedades = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg dark:bg-gray-950">
      <Link className="block" href="#">
        <img
          alt="Propiedad 1"
          className="w-full h-60 object-cover"
          height={400}
          src="/placeholder.svg"
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
          width={600}
        />
      </Link>
      <div className="p-4">
        <span className="inline-block bg-gray-100 text-gray-500 text-xs font-medium px-2 py-1 rounded-full mb-2 dark:bg-gray-800 dark:text-gray-400">
          Casa
        </span>
        <h3 className="text-lg font-semibold mb-2">
          <Link className="hover:underline" href="#">
            Casa moderna con jardín
          </Link>
        </h3>
        <p className="text-gray-500 text-sm mb-4 dark:text-gray-400">
          Hermosa casa con amplios espacios y excelente ubicación.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">$250,000</span>
          <Button size="sm">Ver más</Button>
        </div>
      </div>
    </div>
  );
};
