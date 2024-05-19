import { InmobiliariaInfo } from "@/interfaces/InmobiliariaInfo";
import axios from "axios";

export const urlBase = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_BASE,
});


export const solicitudInmobiliarias = async (token: string, body : InmobiliariaInfo) => {
  try {
    const response = await urlBase.post(`/api/inmobiliarias`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 201) {
      return response;
    } else {
      throw new Error("error al actuaizar data");
    }
  } catch (error) {
    return error.response.data.message;
    throw new Error("Error de red: " + error.message);
  }
};
