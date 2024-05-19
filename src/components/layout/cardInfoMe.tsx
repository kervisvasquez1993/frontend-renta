import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useAuthStore } from "@/store/auth.store";

export const CardInfoMe = () => {
  const user = useAuthStore((state) => state.user);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Perfil de usuario</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Nombre</Label>
            <Input defaultValue={user?.name} id="name" readOnly />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input defaultValue={user?.email} id="email" readOnly />
          </div>
        </div>
        <div>
          <Label htmlFor="role">Rol</Label>
          <Input defaultValue={user?.role} id="role" readOnly />
        </div>
      </CardContent>
    </Card>
  );
};
