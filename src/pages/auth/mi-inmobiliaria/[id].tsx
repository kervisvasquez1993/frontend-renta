import { AuthValidate } from "@/components/shared/AuthValidate";
import { MainAdmin } from "@/components/shared/MainAdmin";
import { FormInmueble } from "@/components/shared/formInmueble";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import React, { useState } from "react";

const MiInmobiliariOne = () => {
  const [statusForm, setStatusForm] = useState(false);
  return (
    <>
      <AuthValidate />
      <MainAdmin title="test">
        <div className="flex flex-col gap-8 p-6 md:p-8 lg:p-10">
          <div className="grid gap-4">
            <h1 className="text-2xl font-bold">Inmobiliaria Acme</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-medium">Dirección:</span>
                <span>123 Calle Principal, Ciudad, País</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-medium">Correo electrónico:</span>
                <span>info@acme.com</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-medium">Teléfono:</span>
                <span>+1 (123) 456-7890</span>
              </div>
            </div>
          </div>
          <Button onClick={() => setStatusForm(true)}> Agregar Inmueble</Button>

          {statusForm ? <FormInmueble /> : ""}

          {/* <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid gap-8 px-4 md:px-6 max-w-6xl mx-auto">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Our Sellers
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Meet the talented individuals behind our products.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-200">
                  <div className="p-6 flex flex-col items-center justify-center">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold">JD</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">John Doe</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      john.doe@example.com
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-200">
                  <div className="p-6 flex flex-col items-center justify-center">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold">JA</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">
                      Jane Appleseed
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      jane.appleseed@example.com
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-200">
                  <div className="p-6 flex flex-col items-center justify-center">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold">TW</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">Tom Wilson</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      tom.wilson@example.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section className="w-full py-2 md:py-4 lg:py-5">
            <div className="container grid gap-6 px-4 md:px-6 max-w-6xl mx-auto">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Nustras Prodiedades
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            </div>
          </section>
        </div>
      </MainAdmin>
    </>
  );
};

export default MiInmobiliariOne;
