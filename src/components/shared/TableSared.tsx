import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";

export const TableSared = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[80px]">Imagen</TableHead>
          <TableHead className="max-w-[150px]">Título</TableHead>
          <TableHead className="hidden md:table-cell">Tipo</TableHead>
          <TableHead className="hidden md:table-cell">Precio</TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <img
              alt="Imagen de la propiedad"
              className="aspect-square rounded-md object-cover"
              height="64"
              src="/placeholder.svg"
              width="64"
            />
          </TableCell>
          <TableCell className="font-medium">Casa en el campo</TableCell>
          <TableCell className="hidden md:table-cell">Venta</TableCell>
          <TableCell>$250,000</TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline">
                Editar
              </Button>
              <Button color="red" size="sm" variant="outline">
                Eliminar
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
