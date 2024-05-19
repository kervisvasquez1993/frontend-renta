import { InmobiliariaInfo } from "@/interfaces/InmobiliariaInfo";
import axios from "axios";

export const urlBase = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_BASE,
});

export const solicitudInmobiliarias = async (
  token: string,
  body: InmobiliariaInfo
) => {
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
      console.log("error");
      throw new Error("error al actuaizar data");
    }
  } catch (error) {
    return error.response.data.message;
    throw new Error("Error de red: " + error.message);
  }
};

export const toggleInmobiliaria = async (token: string, id: string) => {
  try {
    const response = await urlBase.patch(
      `/api/inmobiliarias-toggle/${id}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      return response;
    } else {
      console.log("error");
      throw new Error("error al actuaizar data");
    }
  } catch (error) {
    return error.response.data.message;
  }
};

export const getInmobiliaria = async (token: string, id: string) => {
  try {
    const response = await urlBase.get(`/api/inmobiliarias/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return response;
    } else {
      console.log("error");
      throw new Error("error al actuaizar data");
    }
  } catch (e) {
    return e;
  }
};
