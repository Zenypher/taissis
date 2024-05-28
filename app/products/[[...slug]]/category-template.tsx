import { Filterbar } from "@/components/filter-bar";
import { ProductCard } from "@/components/product-card";

export default function CategoryTemplate(props:any) {
    return (
        <>
            <Filterbar filters={props.filters} />
            <section className="grid lg:grid-cols-3 grid-cols-2 gap-4 p-6 items-center">
              {props.products?.map((item:any) => (
                <ProductCard
                  key={`${item.category}` + item.title}
                  title={item.title}
                  link={item.link}
                  image={item.image}
                  price={item.price}
                />
              ))}
            </section>
          </>
    )
}