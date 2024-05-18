import { Inmobiliaria } from "./Inmobiliaria";

export interface Inmueble {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string;
  direccion: string;
  imagen: string;
  video_url: string;
  destacado: boolean;
  latitud: string;
  longitud: string;
  inmobiliaria: Inmobiliaria;
  created_at: string;
  updated_at: string;
}
