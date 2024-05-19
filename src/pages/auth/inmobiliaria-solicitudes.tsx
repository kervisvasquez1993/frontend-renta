import { getInmobiliaria, toggleInmobiliaria } from "@/apiBackend/APIs";
import { ListCardImbobiliaria } from "@/components/layout/listCardInmobiliaria";
import { AuthValidate } from "@/components/shared/AuthValidate";
import { MainAdmin } from "@/components/shared/MainAdmin";
import { CardInmobiliaria } from "@/components/shared/cardInmobiliaria";
import { Button } from "@/components/ui/button";
import { SkeletonCard } from "@/components/ui/skeleton";
import { useFetch } from "@/hooks/useFetch";
import { InmobiliariaInfo } from "@/interfaces/InmobiliariaInfo";
import { useAuthStore } from "@/store/auth.store";
import React, { useState } from "react";
import { toast } from "sonner";

const InmobiliariaSolicitudes = () => {
  const token = useAuthStore((state) => state.token);
  const [status, setStatus] = useState<string>("todos");
  const { data, isLoading, mutate } = useFetch(
    `/api/inmobiliarias?status=${status === "todos" ? "" : status}`,
    {},
    token
  );

  const handlesUpdateState = async (id: string) => {
    try {
      const response = await toggleInmobiliaria(token, id);
      if (response.status === 200) {
        const currentData = data;
        mutate();
        toast.success("Update status in inmobiliaria");
        // const inmobiliariaIndex = currentData.findIndex(inmobiliaria => inmobiliaria.id === id);
        // if (inmobiliariaIndex !== -1) {
        //   const updatedInmobiliaria = await getInmobiliaria( token, id); 
        //   currentData[inmobiliariaIndex] = updatedInmobiliaria;
        //   mutate(currentData, false); 
        //   toast.success("Update status in inmobiliaria");
        // }
      }
    } catch (e) {
      throw "error";
    }
  };

  console.log(data, "data")
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  return (
    <>
      <AuthValidate />
      <MainAdmin title="Solicitudes de inmuebles">
        <div className="flex py-5 align-center">
          <span className="text-2xl font-bold text-gray-800 dark:text-gray-100 px-10">
            Filtrar solicitudes
          </span>
          <select
            value={status}
            onChange={handleSelectChange}
            className="w-[180px] bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="todos">Todos</option>
            <option value="true">Aprobados</option>
            <option value="false">No Aprobados</option>
          </select>
        </div>

        <ListCardImbobiliaria>
          {isLoading && <SkeletonCard />}
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
              <Button className="my-5" onClick={() => handlesUpdateState(inmobiliaria.id)}>
                {!inmobiliaria.status ? "Aprobar" : "Desaprobar"}
              </Button>
            </div>
          ))}
        </ListCardImbobiliaria>
      </MainAdmin>
    </>
  );
};

export default InmobiliariaSolicitudes;
