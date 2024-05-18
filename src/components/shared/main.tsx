import React from "react";
interface Props {
  children: React.ReactNode;
  title?: string;
}
export const Main = ({ children, title = "Featured Properties" }: Props) => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {children}
        </div>
      </div>
    </section>
  );
};
