import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { solicitudInmobiliarias, urlBase } from "@/apiBackend/APIs";
import { useAuthStore } from "@/store/auth.store";

export const CardRegisterInmobiliaria = () => {
  const token = useAuthStore((state) => state.token);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const onSubmit = handleSubmit(async (value) => {
    const body = {
      nombre: value["company-name"],
      direccion: value["company-address"],
      email: value["company-email"],
      telefono: value["company-phone"],
    };
    console.log(body);

    try {
      const response = await solicitudInmobiliarias(token, body);
      console.log(response);
      if (response.status === 201) {
          const data = response.data;
          toast.success(data.message);
          reset();
        } else {
          toast.error(response?.email);
        }
    } catch (error) {
      toast.error(error);
    }
  });
  return (
    <form onSubmit={onSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Información de la Inmobiliaria</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="company-name">Nombre de la Inmobiliaria</Label>
            <Input
              id="company-name"
              placeholder="Ingrese el nombre de la inmobiliaria"
              {...register("company-name", {
                required: {
                  value: true,
                  message: "The company name field is required",
                },
                minLength: {
                  value: 2,
                  message: "the minimum value in this field is two characters",
                },
                maxLength: {
                  value: 20,
                  message: "the maximum value in this field is 20 characters",
                },
              })}
            />
          </div>
          <div>
            <Label htmlFor="company-address">Dirección</Label>
            <Textarea
              id="company-address"
              placeholder="Ingrese la dirección de la inmobiliaria"
              {...register("company-address", {
                required: {
                  value: true,
                  message: "The company address field is required",
                },
              })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="company-email">Email</Label>
              <Input
                id="company-email"
                placeholder="Ingrese el email de la inmobiliaria"
                type="email"
                {...register("company-email", {
                  required: {
                    value: true,
                    message: "The company email field is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "company email is invalid",
                  },
                })}
              />
            </div>
            <div>
              <Label htmlFor="company-phone">Teléfono</Label>
              <Input
                id="company-phone"
                placeholder="Ingrese el teléfono de la inmobiliaria"
                type="tel"
                {...register("company-phone", {
                  required: {
                    value: true,
                    message: "The company phone field is required",
                  },
                  minLength: {
                    value: 2,
                    message:
                      "the minimum value in this field is two characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "the maximum value in this field is 20 characters",
                  },
                })}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Enviar Solicitud</Button>
        </CardFooter>
      </Card>
    </form>
  );
};
