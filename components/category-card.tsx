import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";
import { Image, CircularProgress } from "@nextui-org/react";
import { Suspense } from "react";

export function Cards(props: any) {
  return (
    <Link href={props.link}>
      <Card className="w-full h-full bg-green-50">
        <CardHeader className="p-4 lg:text-xl font-bold text-green-500 text-sm">
          {props.title}
        </CardHeader>
        <CardBody className="items-center justify-center lg:gap-x-4 gap-y-2">
          <Suspense fallback={<CircularProgress color="success" aria-label="loading"/>}>
            <Image
              isZoomed
              fallbackSrc={<CircularProgress color="success" aria-label="loading"/>}
              src={props.image}
              width={400}
              alt="Card Logo"
              className="w-fit"
            />
          </Suspense>
        </CardBody>
        <CardFooter className="hidden lg:block text-[12px] pl-4">
          <p>{props.footer}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
