import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function Component() {
  return (
    <>
      <Header />
      <div className="flex h-[85vh] items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Sign in to your account
            </h2>
          </div>
          <form action="#" className="space-y-6" method="POST">
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
            <div>
             
              <Button className="w-full" type="submit">
                Sign in
              </Button>
            </div>
          </form>
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <a
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400"
              href="#"
            >
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
