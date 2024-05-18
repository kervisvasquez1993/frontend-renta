/**
 * v0 by Vercel.
 * @see https://v0.dev/t/f6y8QtNVkIH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import { Footer } from "@/components/layout/footer";
import { Main } from "@/components/shared/Main";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { CarouselHeader } from "@/components/shared/CarouselHeader";
import { useFetch } from "@/hooks/useFetch";
import { useState } from "react";

export default function Component() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useFetch(`/api/inmuebles?page=${page}`);
  const { total, currentPage, lastPage, data: inmuebleData } = data || {};
  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  console.log(inmuebleData);
  return (
    <>
      <Header />
      <main>
        <CarouselHeader />
        <Main>
          {
            
          }
          <Card />
        </Main>
      </main>
      <Footer />
    </>
  );
}
