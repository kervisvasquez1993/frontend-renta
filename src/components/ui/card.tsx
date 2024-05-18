import React from "react";
import { Button } from "./button";
import Image from "next/image";
interface Props {
  nombre: string;
  precio: string;
  imagen: string;
}
export const Card = ({ nombre, precio, imagen }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        alt="Property 1"
        className="w-full h-48 object-cover"
        height={250}
        src={imagen}
        style={{
          aspectRatio: "400/250",
          objectFit: "cover",
        }}
        width={400}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{nombre}</h3>
        <p className="text-gray-600 mb-4">{precio}/month</p>
        <div className="flex justify-between items-center">
          <Button variant="outline">View Details</Button>
          <Button variant="outline">Rent</Button>
        </div>
      </div>
    </div>
  );
};
