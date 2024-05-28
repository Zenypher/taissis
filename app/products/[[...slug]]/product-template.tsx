import { Button, Image } from "@nextui-org/react";

export default function ProductTemplate(props:any) {
    return (
        <section className="h-fit flex lg:flex-row flex-col gap-y-10 p-10 lg:gap-x-10 justify-center items-center">
            <div className="flex flex-col gap-y-6">
                <h1 className="lg:hidden text-green-600 p-6 font-bold text-2xl bg-green-50 rounded-xl shadow-md">{props.title}</h1>
                <Image isZoomed src={props.image} alt="Product Image" width={500} className="bg-green-50 p-6 shadow-xl"/>
            </div>
            <div className="bg-green-50 flex flex-col p-8 gap-y-6 lg:w-1/3 rounded-xl shadow-xl">
                <h1 className="hidden lg:flex text-green-600 font-bold text-2xl">{props.title}</h1>
                <div className="flex gap-y-3 flex-col">
                    <h2 className="text-green-500 font-medium text-lg">Descriere</h2>
                    <p className="whitespace-pre-wrap">{props.description}</p>
                </div>
                <div className="flex gap-y-3 flex-col">
                    <h2 className="text-green-500 font-medium text-lg">Compoziție</h2>
                    <p className="whitespace-pre-line">{props.composition}</p>
                </div>
                <div className="flex gap-y-3 flex-col">
                    <h2 className="text-green-500 font-medium text-lg">Proprietăți</h2>
                    <p className="whitespace-pre-line">{props.properties}</p>
                </div>
                <div className="flex gap-y-3 flex-col">
                    <h2 className="text-green-500 font-medium text-lg">Indicații</h2>
                    <p className="whitespace-pre-line">{props.indications}</p>
                </div>
                <div className="flex items-center justify-between gap-x-6">
                    <div className="flex items-center gap-x-6">
                        <h2 className="text-green-600 font-bold text-2xl">Preț:</h2>
                        <p className="font-medium text-green-600 lg:text-lg">{props.price} RON</p>
                    </div>
                    <Button color="success" className="text-green-50 font-medium">Cumpărați</Button>
                </div>
            </div>
        </section>
    )
}