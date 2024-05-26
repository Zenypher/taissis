import { Cards } from "../../components/category-card";
import { ProductsList } from "../../utils/products";

export default function Products() {
  return (
    <>
      <section className="p-6 gap-4 grid grid-cols-2 lg:grid-cols-3 h-screen lg:h-fit">
        {ProductsList.map((value) => (
          <Cards
            key={value.title}
            title={value.title}
            link={value.link}
            image={value.image}
            description="Ceva"
          />
        ))}
      </section>
    </>
  );
}
