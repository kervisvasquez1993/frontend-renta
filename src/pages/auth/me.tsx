import { CardInfoMe } from "@/components/layout/cardInfoMe";
import { CardRegisterInmobiliaria } from "@/components/layout/cardRegisterInmobiliaria";
import { ListCardImbobiliaria } from "@/components/layout/listCardInmobiliaria";
import { AuthValidate } from "@/components/shared/AuthValidate";
import { MainAdmin } from "@/components/shared/MainAdmin";
import { CardInmobiliaria } from "../../components/shared/cardInmobiliaria";
import { useFetch } from "@/hooks/useFetch";
import { useAuthStore } from "@/store/auth.store";
import { InmobiliariaInfo } from "@/interfaces/InmobiliariaInfo";
import { SkeletonCard } from "@/components/ui/skeleton";

const Me = () => {
  const token = useAuthStore((state) => state.token);
  const { data, isLoading, mutate } = useFetch(
    "/api/list-for-user-inmobiliarias",
    {},
    token
  );

  return (
    <>
      <AuthValidate />
      <MainAdmin title="Mi Perfil">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <CardInfoMe />
          </div>
          <div>
            <CardRegisterInmobiliaria />
          </div>
        </div>
        <ListCardImbobiliaria>
          {isLoading && <SkeletonCard />}
          {data?.map((inmobiliaria: InmobiliariaInfo) => (
            <CardInmobiliaria
              email={inmobiliaria.email}
              direccion={inmobiliaria.direccion}
              nombre={inmobiliaria.nombre}
              telefono={inmobiliaria.telefono}
              status={inmobiliaria.status}
              key={inmobiliaria.email}
              id={inmobiliaria.id}
            />
          ))}
        </ListCardImbobiliaria>
      </MainAdmin>
    </>
  );
};

export default Me;
