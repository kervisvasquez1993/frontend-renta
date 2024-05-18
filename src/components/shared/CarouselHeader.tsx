import React from "react";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
export const CarouselHeader = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <Carousel className="w-full max-w-6xl">
          <CarouselContent>
            <CarouselItem>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <img
                  alt="Property 1"
                  className="w-full h-full object-cover"
                  height={400}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "1200/400",
                    objectFit: "cover",
                  }}
                  width={1200}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h2 className="text-2xl font-bold">Luxury Apartment</h2>
                  <p className="text-lg">$2,500/month</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <img
                  alt="Property 2"
                  className="w-full h-full object-cover"
                  height={400}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "1200/400",
                    objectFit: "cover",
                  }}
                  width={1200}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h2 className="text-2xl font-bold">Beachfront Villa</h2>
                  <p className="text-lg">$4,000/month</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <img
                  alt="Property 3"
                  className="w-full h-full object-cover"
                  height={400}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "1200/400",
                    objectFit: "cover",
                  }}
                  width={1200}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h2 className="text-2xl font-bold">Cozy Cottage</h2>
                  <p className="text-lg">$1,800/month</p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
