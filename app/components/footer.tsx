import { Button, Link, Tooltip } from "@nextui-org/react";
import {
  UilFacebookF,
  UilInstagram,
  UilLinkedin,
  UilYoutube,
} from "@iconscout/react-unicons";

export function Footer() {
  const linkButtons = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/people/Taissis-Concept-SRL/100057651961807/",
      icon: <UilFacebookF color="white" />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/taissis_concept/?hl=en",
      icon: <UilInstagram color="white" />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/company/taissis-concept/",
      icon: <UilLinkedin color="white" />,
    },
    {
      name: "Youtube",
      link: "",
      icon: <UilYoutube color="white" />,
    },
  ];

  return (
    <footer className="bg-green-50 py-6 px-[64px] flex flex-col-reverse lg:flex-row justify-between items-center mt-6 gap-y-6">
      <h3 className="text-[12px]">© 2024 Taissis Concept S.R.L.</h3>
      <div className="flex gap-x-4">
        {linkButtons.map((item) => (
          <Tooltip content={item.name} delay={1200}>
            <Button as={Link} href={item.link} color="success">
              {item.icon}
            </Button>
          </Tooltip>
        ))}
      </div>
    </footer>
  );
}
