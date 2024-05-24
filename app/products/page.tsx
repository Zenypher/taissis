import { NavigationBar } from "../components/navbar";
import { Cards } from "../components/category-card";
import { ProductsList } from "../data/products";

export default function Products() {
  return (
    <>
      <section className="p-6 gap-4 grid grid-cols-2 lg:grid-cols-3 h-screen lg:h-fit">
        {ProductsList.map((value) => (
          <Cards
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
