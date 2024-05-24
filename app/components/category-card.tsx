import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export function Cards(props: any) {
  return (
    <Link href={props.link}>
      <Card key={props.key} className="w-full h-full">
        <CardHeader className="p-4 lg:text-xl font-bold text-green-500 text-sm">
          {props.title}
        </CardHeader>
        <CardBody className="items-center justify-center lg:gap-x-4 gap-y-2">
          <Image
            src={props.image}
            width={400}
            alt="Card Logo"
            className="w-full"
          />
        </CardBody>
        <CardFooter className="hidden lg:block text-[12px] pl-4">
          <p>{props.footer}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
