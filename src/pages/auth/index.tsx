import { TableSared } from "@/components/shared/TableSared";
import { MainAdmin } from "@/components/shared/MainAdmin";
import { AuthValidate } from "@/components/shared/AuthValidate";

export default function Component() {
  return (
    <>
      <AuthValidate />
      <MainAdmin title="Mis propiedades">
        <TableSared />
      </MainAdmin>
    </>
  );
}
