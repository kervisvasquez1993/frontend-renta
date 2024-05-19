import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { urlBase } from "@/apiBackend/APIs";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Component() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (value) => {
    try {
      const response = await urlBase.post("/api/register", value, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (response.status === 201) {
        const data = response.data;
        toast.success(data.message);
        reset();
        router.push("/login");
      } else {
        console.error("Error al enviar el formulario");
      }
    } catch (error) {
      console.log(error.response)
      toast.error(error.response.data.error.email);
    }
  });
  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center  h-[85vh]">
        <div className="mx-auto max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Registro</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Crea una cuenta para acceder a todas las funcionalidades de
              nuestra aplicación.
            </p>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                placeholder="Ingresa tu nombre"
                {...register("name", {
                  required: {
                    value: true,
                    message: "The name field is required",
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

              {errors.name && (
                <Alert variant="destructive">
                  <AlertDescription>{errors.name.message}</AlertDescription>
                </Alert>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                placeholder="ejemplo@dominio.com"
                type="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "The email field is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "email is invalid",
                  },
                })}
              />

              {errors.email && (
                <Alert variant="destructive">
                  <AlertDescription>{errors.email.message}</AlertDescription>
                </Alert>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                placeholder="Ingresa tu contraseña"
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "valuer is required",
                  },
                  minLength: {
                    value: 6,
                    message: "the minimum value in this field is 6 characters",
                  },
                })}
              />

              {errors.password && (
                <Alert variant="destructive">
                  <AlertDescription>{errors.password.message}</AlertDescription>
                </Alert>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirmar contraseña</Label>
              <Input
                id="confirm-password"
                placeholder="Confirma tu contraseña"
                type="password"
                {...register("password_confirmation", {
                  required: {
                    value: true,
                    message: "password confirmation is required",
                  },
                  validate: (value) => {
                    if (value === watch("password")) {
                      return true;
                    } else {
                      return "passwords do not match ";
                    }
                  },
                })}
              />

              {errors.password_confirmation && (
                <Alert variant="destructive">
                  <AlertDescription>
                    {errors.password_confirmation.message}
                  </AlertDescription>
                </Alert>
              )}
            </div>

            <Button className="w-full" type="submit">
              Registrarse
            </Button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
