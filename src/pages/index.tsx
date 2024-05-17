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
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <>
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <svg
              className="h-8 w-8 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                fill="currentColor"
              />
              <path
                d="M12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-2xl font-bold">Property Finder</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a className="hover:text-gray-400" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#">
                  Buy
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#">
                  Rent
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#">
                  Login
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#">
                  Sing up
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
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
        <section className="py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Featured Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Property 1"
                  className="w-full h-48 object-cover"
                  height={250}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Luxury Apartment</h3>
                  <p className="text-gray-600 mb-4">$2,500/month</p>
                  <div className="flex justify-between items-center">
                    <Button variant="primary">View Details</Button>
                    <Button variant="outline">Rent</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Property 2"
                  className="w-full h-48 object-cover"
                  height={250}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Beachfront Villa</h3>
                  <p className="text-gray-600 mb-4">$4,000/month</p>
                  <div className="flex justify-between items-center">
                    <Button variant="primary">View Details</Button>
                    <Button variant="outline">Rent</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Property 3"
                  className="w-full h-48 object-cover"
                  height={250}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Cozy Cottage</h3>
                  <p className="text-gray-600 mb-4">$1,800/month</p>
                  <div className="flex justify-between items-center">
                    <Button variant="primary">View Details</Button>
                    <Button variant="outline">Rent</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Property 4"
                  className="w-full h-48 object-cover"
                  height={250}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Modern Townhouse</h3>
                  <p className="text-gray-600 mb-4">$3,200/month</p>
                  <div className="flex justify-between items-center">
                    <Button variant="primary">View Details</Button>
                    <Button variant="outline">Rent</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <svg
              className="h-8 w-8 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                fill="currentColor"
              />
              <path
                d="M12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-2xl font-bold">Property Finder</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a className="hover:text-gray-400" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#">
                  Buy
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#">
                  Rent
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#">
                  Login
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#">
                  Sing up
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
