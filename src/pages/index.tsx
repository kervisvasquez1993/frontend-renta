import { Footer } from "@/components/layout/footer";
import { Main } from "@/components/shared/Main";
import { Card } from "@/components/ui/cardInmueble";
import { Header } from "@/components/layout/header";
import { CarouselHeader } from "@/components/shared/CarouselHeader";
import { useFetch } from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { usePagePagination } from "@/store/usePagePagination.store";
import { Skeleton, SkeletonCard } from "@/components/ui/skeleton";
import { Inmueble } from "../interfaces/Inmueble";

export default function Component() {
  const [page, setPage] = useState(1);
  const totalPage = usePagePagination((state) => state.totalPage);
  const lastPageState = usePagePagination((state) => state.lastPage);
  const currentPageState = usePagePagination((state) => state.currentPage);
  const setTotalPage = usePagePagination((state) => state.setTotalPage);
  const setLastPage = usePagePagination((state) => state.setLastPage);
  const setCurrentPage = usePagePagination((state) => state.setCurrentPage);
  const { data, isLoading } = useFetch(`/api/inmuebles?page=${page}`);
  const { total, currentPage, lastPage, data: inmuebleData } = data || {};
  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  useEffect(() => {
    if (total) {
      setTotalPage(total);
    }
    if (currentPage) {
      setCurrentPage(currentPage);
    }
    if (lastPage) {
      setLastPage(lastPage);
    }
  }, [total, currentPage, lastPage, inmuebleData]);
  return (
    <>
      <Header />
      <main>
        <CarouselHeader />
        <Main>
          {isLoading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            inmuebleData?.map((inmueble: Inmueble) => (
              <Card
                key={inmueble.id}
                nombre={inmueble.nombre}
                precio={inmueble.precio}
                imagen={inmueble.imagen}
              />
            ))
          )}
        </Main>
      </main>
      <Footer />
    </>
  );
}
