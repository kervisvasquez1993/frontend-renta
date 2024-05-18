import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Component() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center  h-[85vh]">
      <div className="mx-auto max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Registro</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Crea una cuenta para acceder a todas las funcionalidades de nuestra
            aplicación.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" placeholder="Ingresa tu nombre" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              placeholder="ejemplo@dominio.com"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              placeholder="Ingresa tu contraseña"
              required
              type="password"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirmar contraseña</Label>
            <Input
              id="confirm-password"
              placeholder="Confirma tu contraseña"
              required
              type="password"
            />
          </div>
          <Button className="w-full" type="submit">
            Registrarse
          </Button>
        </div>
      </div>
      </section>
      <Footer />
    </>
  );
}
