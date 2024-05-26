import Stock from "../public/assets/image.png";
import { LightBulbIcon,BriefcaseIcon, ClipboardDocumentCheckIcon, PuzzlePieceIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export function Hero() {
  return (
    <section className="flex flex-col gap-y-[24px] p-6">
      <div className="p-6 flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-6 gap-y-6 bg-green-50 rounded-xl shadow-xl">
        <div className="flex flex-col gap-y-6">
        <h1 className="font-bold text-4xl text-green-600">Compania</h1>
        <p className="lg:text-[18px]">
          <span className="font-medium text-green-600">Taissis</span> este o companie dedicată dezvoltării de dispozitive medicale
          inovante, gata oricând să răspundă exigențelor în ceea ce privește
          calitatea și menținerea unui bun echilibru al balanței eficientă-cost.
          Noi oferim soluții complete pentru îngrijirea plăgilor și ne asigurăm
          că prin tot ceea ce facem satisfacem nevoile clienților noștri și le
          depășim așteptările.
        </p>
        </div>
        <Image src={Stock} alt="Imagine de prezentare" className="shadow-lg" />
      </div>
      <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-6">
      <div className="py-8 px-8 lg:px-16 flex flex-col lg:justify-between gap-y-6 gap-x-8 bg-green-50 rounded-xl shadow-xl">
        <h1 className="font-bold text-3xl text-green-600">Valori</h1>
        <div className="flex flex-col gap-y-6 lg:flex-row gap-x-6">
          <ul className="flex flex-col gap-y-[10px]">
            <li className="flex items-center gap-x-3">
              <LightBulbIcon className="size-12 text-green-600"/>
              Creativitate productivă
            </li>
            <li className="flex items-center gap-x-3">
              <BriefcaseIcon className="size-12 text-green-600"/>
              Profesionalism
            </li>
            <li className="flex items-center gap-x-3">
              <ClipboardDocumentCheckIcon className="size-12 text-green-600"/>
              Responsabilitate
            </li>
            <li className="flex items-center gap-x-3">
              <PuzzlePieceIcon className="size-12 text-green-600"/>
              Solidaritate
            </li>
          </ul>
          <div className="flex flex-col justify-center lg:text-[18px]">
          <p>
            Valorile noastre nu sunt concepte abstracte, sunt trăite zi de zi de
            oamenii <span className="text-green-600 font-bold">Taissis</span>.
          </p>
          <ul className="pl-6 gap-y-[10px]">
            <li>
              Oamenii Taissis sunt: <span className="text-green-600 font-medium">creativi</span>, găsesc soluții, identifică
              perspective de dezvoltare.
            </li>
            <li>
              Oamenii Taissis sunt mereu <span className="text-green-600 font-medium">la curent cu tot ce e nou</span> și fac
              eforturi să devină <span className="text-green-600 font-medium">cei mai buni în domeniul lor</span>.
            </li>
            <li>
              Oamenii Taissis <span className="text-green-600 font-medium">se implică, au curajul</span> de a risca pentru a reuși,
              își <span className="text-green-600 font-medium">asumă rezultatele</span> propriilor acțiuni.
            </li>
            <li>Oamenii Taissis sunt <span className="text-green-600 font-medium">uniți</span>, formează o <span className="text-green-600 font-medium">echipă solidă</span>.</li>
          </ul>
        </div>
        </div>
        
      </div>
      <div className="py-8 px-8 lg:px-16 flex flex-col gap-y-6 bg-green-50 rounded-xl shadow-xl">
        <h1 className="font-bold text-3xl text-green-600">Misiune / Viziune</h1>
        <p className="lg:text-[18px]">
        Să devenim furnizorul preferat de soluții complete de îngrijire a plăgii la nivel european, prin inovație continuă în toate domeniile de activitate.
        </p>
      </div>
      </div>
    </section>
  );
}
