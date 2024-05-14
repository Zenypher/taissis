import Image from "next/image";
import Lightbulb from "../../public/assets/lightbulb.svg";
import Briefcase from "../../public/assets/briefcase.svg";
import Handshake from "../../public/assets/handshake.svg";
import Teamwork from "../../public/assets/teamwork.svg";
import Stock from "../../public/assets/image.png";

export function Hero() {
  return (
    <div className="flex flex-col pt-4 gap-y-[32px]">
      <div className="flex justify-center px-[20px] lg:px-[280px]">
        <h1 className="text-[64px] font-bold text-lime-500 drop-shadow-2xl">
          Taissis
        </h1>
      </div>
      <div className="flex flex-col px-[32px] lg:px-[64px]">
        <p>
          Taissis este o companie dedicată dezvoltării de dispozitive medicale
          inovante, gata oricând să răspundă exigențelor în ceea ce privește
          calitatea și menținerea unui bun echilibru al balanței eficientă-cost.
        </p>
        <p>
          Noi oferim soluții complete pentru îngrijirea plăgilor și ne asigurăm
          că prin tot ceea ce facem satisfacem nevoile clienților noștri și le
          depășim așteptările.
        </p>
        <div className="pt-[32px] lg:px-[200px] flex flex-col gap-y-[24px] pb-[32px]">
          <div className="flex justify-center">
            <Image src={Stock} alt="Presentation Image" className="sm:block" />
          </div>
          <div className="">
            <h1 className="font-bold text-3xl text-lime-500">Valori</h1>
          </div>
          <ul className="flex flex-col gap-y-[10px]">
            <li className="flex items-center gap-x-3">
              <Image src={Lightbulb} alt="lightbulb" className="w-[32px]" />
              Creativitate productivă
            </li>
            <li className="flex items-center gap-x-3">
              <Image src={Briefcase} alt="lightbulb" className="w-[32px]" />
              Profesionalism
            </li>
            <li className="flex items-center gap-x-3">
              <Image src={Handshake} alt="lightbulb" className="w-[32px]" />
              Responsabilitate
            </li>
            <li className="flex items-center gap-x-3">
              <Image src={Teamwork} alt="lightbulb" className="w-[32px]" />
              Solidaritate
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
