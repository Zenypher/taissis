import { ProductCard } from "@/app/components/product-card";
import { BOData } from "@/app/data/bloc-operator-data";

export default function BlocOperator() {
  return (
    <>
      {BOData.map((item) => (
        <ProductCard
          title={item.title}
          link={item.link}
          image={item.link}
          price={item.price}
        />
      ))}
    </>
  );
}
