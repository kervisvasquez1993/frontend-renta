import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { UserData } from "@/interfaces/userData";
import { NextPage } from "next";
import { toast } from "sonner";
import { useRouter } from "next/router";
import { useAuthStore } from "@/store/auth.store";

export default function Component() {
  const { data } = useSession();
  const setUser = useAuthStore(state => state.setUser);
  const setToken = useAuthStore(state => state.setToken);
  const [errors, setErrors] = useState<string[]>([]);
  const router = useRouter();
  const customData = data as UserData;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (data) {
      const customData = data as UserData;
      //@ts-ignore
      setUser(customData.data);
      //@ts-ignore
      setToken(customData.accessToken);
      router.push("/auth");
      toast.success(`Welcome to ${customData.user.name}`);
    }
  }, [data]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const responseNextAuth = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    if (responseNextAuth?.error) {
      setErrors(responseNextAuth.error.split(","));
      toast.error("incorrect data supplied");
      return;
    }
  };
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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                name="email"
                placeholder="ejemplo@dominio.com"
                required
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                required
                type="password"
                value={formData.password}
                onChange={handleInputChange}
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
