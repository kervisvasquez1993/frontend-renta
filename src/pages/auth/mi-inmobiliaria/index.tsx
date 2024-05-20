import { ListCardImbobiliaria } from "@/components/layout/listCardInmobiliaria";
import { AuthValidate } from "@/components/shared/AuthValidate";
import { MainAdmin } from "@/components/shared/MainAdmin";
import { CardInmobiliaria } from "@/components/shared/cardInmobiliaria";
import {
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { SkeletonCard } from "@/components/ui/skeleton";
import { useFetch } from "@/hooks/useFetch";
import { InmobiliariaInfo } from "@/interfaces/InmobiliariaInfo";
import { useAuthStore } from "@/store/auth.store";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";
import Link from "next/link";
import React from "react";

const MyInmobiliaria = () => {
  const token = useAuthStore((state) => state.token);
  const { data, isLoading, mutate } = useFetch(
    "/api/list-for-imobiliaria-aprobadas",
    {},
    token
  );
  console.log(data);
  return (
    <>
      <AuthValidate />
      <MainAdmin title="Mis Inmobiliarias">
        <ListCardImbobiliaria>
          {isLoading && (
            <>
              <SkeletonCard /> <SkeletonCard /> <SkeletonCard />{" "}
            </>
          )}
          {data?.map((inmobiliaria: InmobiliariaInfo) => (
            <div className="flex flex-col">
              <CardInmobiliaria
                email={inmobiliaria.email}
                direccion={inmobiliaria.direccion}
                nombre={inmobiliaria.nombre}
                telefono={inmobiliaria.telefono}
                status={inmobiliaria.status}
                key={inmobiliaria.email}
                id={inmobiliaria.id}
              />
              <Link
                href={`/auth/mi-inmobiliaria/${inmobiliaria.id}`}
                className=" my-2 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-200 rounded shadow ripple hover:shadow-lg hover:bg-gray-400 focus:outline-none"
              >
                Ver inmuebles
              </Link>
            </div>
          ))}
        </ListCardImbobiliaria>
      </MainAdmin>
    </>
  );
};

export default MyInmobiliaria;
