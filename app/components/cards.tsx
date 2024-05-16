import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";
import IngrijireaPlagii from "../../public/assets/products/ingrijirea-plagii.png";
import Image from "next/image";

export function Cards() {
  const productItems = [
    "Îngrijirea Plăgii",
    "Bloc Operator",
    "Prim Ajutor",
    "Produse Cosmetice",
    "Terapia Durerii",
    "Îngrijire ORL",
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 px-[24px] py-[32px]">
      {productItems.map((value, index) => (
        <Link href="#">
          <Card key={`${value}-${index}`} className="w-full h-full">
            <CardHeader className="p-4 text-[20px] font-bold text-success">
              {value}
            </CardHeader>
            <CardBody className="grid grid-cols-2">
              <Image src={IngrijireaPlagii} alt="Card Logo" className="w-1/2" />
              <p>Descrierea vine aici</p>
            </CardBody>
            <CardFooter className="text-[12px] pl-4">
              <p>Altceva vine aici</p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
