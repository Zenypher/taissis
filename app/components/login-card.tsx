import { Card, CardHeader, CardBody, Input, Button } from "@nextui-org/react";

export function Login() {
  return (
    <div className="min-h-100% lg:px-[32px] lg:py-[32px] flex items-center justify-center">
      <Card isBlurred className="max-w-[300px] lg:max-w-[320px] p-[12px]">
        <CardHeader>
          <h1 className="font-bold text-[32px] px-[12px] py-[12px]">Login</h1>
        </CardHeader>
        <CardBody className="gap-y-[24px]">
          <Input label="Email" type="email"></Input>
          <Input label="Password" type="password"></Input>
          <div className="flex px-[12px] gap-x-[12px] justify-center">
            <Button color="success" className="text-white">
              Login
            </Button>
            <Button color="warning" className="">
              Reset Password
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
