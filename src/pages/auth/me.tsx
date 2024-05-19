import { CardInfoMe } from "@/components/layout/cardInfoMe";
import { CardRegisterInmobiliaria } from "@/components/layout/cardRegisterInmobiliaria";
import { AuthValidate } from "@/components/shared/AuthValidate";
import { MainAdmin } from "@/components/shared/MainAdmin";

import React from "react";

const Me = () => {
  return (
    <>
      <AuthValidate />
      <MainAdmin title="Mis propiedades">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <CardInfoMe />
          </div>
          <div>
            <CardRegisterInmobiliaria />
          </div>
        </div>
      </MainAdmin>
    </>
  );
};

export default Me;
