import { TableSared } from "@/components/shared/TableSared";
import { MainAdmin } from "@/components/shared/MainAdmin";
import { AuthValidate } from "@/components/shared/AuthValidate";

const Auth = () => {
  return (
    <>
      <AuthValidate />
      <MainAdmin title="Mis propiedades">
        <TableSared />
      </MainAdmin>
    </>
  );
};

export default Auth;
