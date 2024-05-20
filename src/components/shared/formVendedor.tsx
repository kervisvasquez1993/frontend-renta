import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const FormVendedor = () => {
  return (
    <div className="grid gap-4">
      <h2 className="text-xl font-bold">Agregar Agente</h2>
      <form className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input id="email" placeholder="agente@example.com" type="email" />
        </div>
        <Button type="submit">Agregar Agente</Button>
      </form>
    </div>
  );
};
