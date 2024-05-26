import { Filterbar } from "@/components/filter-bar";
import { ProductCard } from "@/components/product-card";
import { BOData, BOFilters } from "@/utils/bloc-operator-data";

export default function BlocOperator() {
  return (
    <>
      <Filterbar filters={BOFilters}/>
      <section className="grid lg:grid-cols-3 grid-cols-2 gap-4 p-6">
      {BOData.map((item) => (
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
