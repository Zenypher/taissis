import { Filterbar } from "@/components/filter-bar";
import { ProductCard } from "@/components/product-card";
import { IPFilters, IPProduct } from "@/utils/ingrijirea-plagii-date";

export default function IngrijirePlagi() {
  return (
    <>
      <Filterbar filters={IPFilters} />
      <section className="grid lg:grid-cols-3 grid-cols-2 gap-4 p-6">
        {IPProduct.map((item) => (
          <ProductCard
            key={`${item.compozitie}` + item.title}
            title={item.title}
            link={item.link}
            image={item.image}
            price={item.price}
            composition={
              Array.isArray(item.compozitie)
                ? item.compozitie.map((comp) => `${comp}`).join("-")
                : item.compozitie
            }
          />
        ))}
      </section>
    </>
  );
}
