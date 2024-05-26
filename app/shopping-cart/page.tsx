import { Button } from "@nextui-org/react";

export default function ShoppingCart() {
    return (
        <section className="h-screen flex flex-col lg:flex-row justify-center lg:gap-x-12 gap-y-12 p-6 items-center">
            <div className="bg-green-50 p-6 h-1/2 rounded-xl shadow-xl">
                <h1 className="font-bold text-green-600 text-4xl">Coș de cumpărături</h1>
            </div>
            <div className="flex flex-col gap-y-12 bg-green-50 p-6 h-1/2 rounded-xl shadow-xl">
                <div className="flex items-center gap-x-4 justify-between">
                <h1 className="font-medium text-green-600 text-2xl">Subtotal</h1>
                <p> {20} RON</p>
                </div>
                <div className="flex items-center gap-x-4 justify-between">
                <h1 className="font-medium text-green-600 text-2xl">Cost de transport</h1>
                <p> {0} RON</p>
                </div>
                <div className="flex items-center gap-x-4 justify-between">
                    <h1 className="font-medium text-green-600 text-2xl">Total</h1>
                    <p> {0} RON</p>
                </div>
                <div className="flex justify-center">
                    <Button color="success" className="text-green-50">Continuă</Button>
                </div>
            </div>
        </section>
    )
}