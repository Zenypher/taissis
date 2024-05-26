import { Filterbar } from "@/components/filter-bar";
import { ProductCard } from "@/components/product-card";
import { PAFilters, PAProducts } from "@/utils/prim-ajutor-data";

export default function PrimAjutor() {
  return (
    <>
    <Filterbar filters={PAFilters}/>
    <section className="grid lg:grid-cols-3 grid-cols-2 gap-4 p-6">
      {PAProducts.map((item) => (
        <ProductCard
          key={item.title}
          title={item.title}
          link={item.link}
          image={item.link}
          price={item.price}
        />
      ))}
      </section>
    </>
  );
}
