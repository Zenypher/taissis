import { Button, Image } from "@nextui-org/react";
import Link from "next/link";

export function ProductDesc(props:any) {
    return (
        <section className="lg:h-screen flex flex-col lg:flex-row lg:p-10 p-6 justify-center items-center lg:gap-x-10 gap-y-4">
        <div className="flex flex-col gap-y-6 items-center">
            <h1 className="lg:hidden flex font-bold text-2xl text-green-600 bg-green-50 p-3 rounded-xl shadow-sm">{props.title}</h1>
            <Image src={props.image} alt="Product Image" width={500} height={500} className="shadow-xl"/>
        </div>
        <div className="flex flex-col bg-green-50 lg:p-6 p-4 gap-y-6 lg:w-1/2 rounded-xl shadow-xl">
            <h1 className="hidden lg:flex font-bold text-3xl text-green-600">{props.title}</h1>
            <div className="flex flex-col gap-y-4">
                <h2 className="font-medium text-green-500 text-xl">Descriere</h2>
                <p>{props.description}</p>
            </div>
            <div className="flex flex-col gap-y-4">
                <h2 className="font-medium text-green-500 text-xl">Compoziție</h2>
                <p>{props.composition}</p>
            </div>
            <div className="flex flex-col gap-y-4">
                <h2 className="font-medium text-green-500 text-xl">Proprietăți</h2>
                <p>{props.properties}</p>
            </div> 
            <div className="flex flex-col gap-y-4">
                <h2 className="font-medium text-green-500 text-xl">Indicații</h2>
                <p>{props.indications}</p>
            </div>
            <div className="flex flex-auto">
                <Button color="success" className="text-white font-medium" as={Link} href="#">
                    Cumpără
                </Button>
            </div>
        </div>
        </section>
        
    )
}