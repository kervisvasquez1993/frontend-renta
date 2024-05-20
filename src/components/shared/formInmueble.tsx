import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { useFetch } from "@/hooks/useFetch";

export const FormInmueble = () => {
  const { data: typeVenta, isLoading: isLoadingVenta } = useFetch(
    "/api/tipos-venta-inmuebles"
  );
  const { data: type, isLoading: isLoadingType } = useFetch(
    "/api/tipos-inmuebles"
  );
  const [status, setStatus] = useState<string>("todos");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };


  return (
    <div className="grid gap-4">
      <h2 className="text-xl font-bold">Agregar Residencia</h2>
      <form className="grid gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="nombre">Nombre</Label>
            <Input id="nombre" placeholder="Casa en la playa" type="text" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="precio">Precio</Label>
            <Input id="precio" placeholder="100000" type="number" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="direccion">Dirección</Label>
            <Input
              id="direccion"
              placeholder="123 Calle Principal, Ciudad"
              type="text"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="imagen">Imagen</Label>
            <Input id="imagen" type="file" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="latitud">Latitud</Label>
            <Input id="latitud" placeholder="40.730610" type="number" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="longitud">Longitud</Label>
            <Input id="longitud" placeholder="-73.935242" type="number" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="status">Tipo de alquiler</Label>
            <select
              value={status}
              onChange={handleSelectChange}
              className="w-[180px] bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:black-500"
            >
              <option value="">Seleccione una opción</option>
              {typeVenta.data?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="status">Tipo de Inmueble</Label>
            <select
              value={status}
              onChange={handleSelectChange}
              className="w-[180px]  px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:black-500"
            >
              <option value="">Seleccione una opción</option>
              {type.data?.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="destacado">Destacado</Label>
            <Checkbox id="destacado" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="descripcion">Descripción</Label>
            <Textarea
              id="descripcion"
              placeholder="Descripción de la residencia"
            />
          </div>
        </div>
        <Button type="submit">Agregar Residencia</Button>
      </form>
    </div>
  );
};
