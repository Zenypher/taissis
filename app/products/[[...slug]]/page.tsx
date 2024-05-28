import { Cards } from "@/components/category-card";
import CategoryTemplate from "./category-template";
import { IPFilters, IPProduct, CategoryList, BOProducts, BOFilters, PAProducts, PAFilters, IORLProducts, IORLFilters, PCProducts } from "@/utils/products";
import ProductTemplate from "./product-template";
import { Suspense } from "react";
import Loading from "./loading";

const ProductsData = [
    {   
        id: "ingrijirea-plagi",
        data: IPProduct,
        filters: IPFilters
    }, 
    {
        id: "bloc-operator",
        data: BOProducts,
        filters: BOFilters
    },
    {
        id: "prim-ajutor",
        data: PAProducts,
        filters: PAFilters
    },
    {
        id: "ingrijire-orl",
        data: IORLProducts,
        filters: IORLFilters
    },
    {
        id: "produse-cosmetice",
        data: PCProducts
    }
]

export default function Products({params} : {params: {slug: string[]}}) {
    if(params.slug?.length === 2) {
        const productItem = ProductsData.find(item => item.id === params.slug[0]);
        const productData = productItem?.data.find(pItem => params.slug[1] === pItem.id)
        return <ProductTemplate image={productData?.image} title={productData?.title}
        composition={productData?.composition}
        description={productData?.description}
        properties={productData?.properties}
        indications={productData?.indications}
        price={productData?.price}/>;
    }
    else if(params.slug?.length === 1) {
        const productItems = ProductsData.find(item => item.id === params.slug[0])
        return <CategoryTemplate filters={productItems?.filters} products={productItems?.data}/>;
    }
    return (
        <>
            <section className="p-6 gap-4 grid grid-cols-2 lg:grid-cols-3 h-screen lg:h-fit w-full">
                <Suspense fallback={<Loading/>}>
                {CategoryList.map((value) => (
                    <Cards
                        key={value.title}
                        title={value.title}
                        link={value.link}
                        image={value.image}
                        description="Ceva"
                    />
                    ))}
                </Suspense>
            </section>
        </>
    );
}
