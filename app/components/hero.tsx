import Lightbulb from "../../public/assets/lightbulb.svg";
import Briefcase from "../../public/assets/briefcase.svg";
import Handshake from "../../public/assets/handshake.svg";
import Teamwork from "../../public/assets/teamwork.svg";
import Logo from "../../public/assets/logo.svg";
import Stock from "../../public/assets/image.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="flex flex-col gap-y-[24px]">
      <div className="flex justify-center">
        <Image
          src={Logo}
          alt="Logo-ul companiei"
          className="lg:w-[450px] w-[400px]"
        />
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-2 px-[32px] lg:px-[64px] gap-x-[24px]">
        <p>
          Taissis este o companie dedicată dezvoltării de dispozitive medicale
          inovante, gata oricând să răspundă exigențelor în ceea ce privește
          calitatea și menținerea unui bun echilibru al balanței eficientă-cost.
          Noi oferim soluții complete pentru îngrijirea plăgilor și ne asigurăm
          că prin tot ceea ce facem satisfacem nevoile clienților noștri și le
          depășim așteptările.
        </p>
        <Image src={Stock} alt="Imagine de prezentare" className="pt-[24px]" />
      </div>
      <div className="py-[32px] px-[32px] lg:px-[64px] flex flex-row gap-x-6">
        <h1 className="font-bold text-3xl text-green-900">Valori</h1>
        <ul className="flex flex-col gap-y-[10px] lg:px-[10px] lg:py-[10px]">
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
        <div>
          <p>
            Valorile noastre nu sunt concepte abstracte, sunt trăite zi de zi de
            oamenii Taissis.
          </p>
          <ul className="pl-[16px] gap-y-[10px]">
            <li>
              Oamenii Taissis sunt: creativi, găsesc soluții, identifică
              perspective de dezvoltare.
            </li>
            <li>
              Oamenii Taissis sunt mereu la curent cu tot ce e nou și fac
              eforturi să devină cei mai buni în domeniul lor.
            </li>
            <li>
              Oamenii Taissis se implică, au curajul de a risca pentru a reuși,
              își asumă rezultatele propriilor acțiuni.
            </li>
            <li>Oamenii Taissis sunt uniți, formează o echipă solidă.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
