import { Navbar } from "@/components/navigation";
import { Metricas } from "./components/metricas";
import { IoLogoGitlab } from "react-icons/io5";
import { FolderCode, Origami, ScanFace } from "lucide-react";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { TbUrgent } from "react-icons/tb";

export function App() {
  return (
    <>
      <div className="w-full h-screen flex">
        <Navbar />
        <div className="w-full p-5">
          <Metricas />

          <div className="w-full h-64 mt-5 flex justify-between gap-5">
            <div className="flex-1 h-44 py-3 px-4 bg-preto/35 backdrop-blur-md rounded-xl">
              <h1 className="font-bold">Entregas da Semana</h1>

              <div className="w-full h-32 flex flex-col justify-evenly">
                <div className="w-full flex justify-between items-center border-b border-zinc-500">
                  <p className="text-sm flex items-center gap-2">
                    <IoLogoGitlab className="w-5 h-5" />
                    Logomarcas
                  </p>
                  <span className="font-bold text-lg text-chart-2">7</span>
                </div>

                <div className="w-full flex justify-between items-center border-b border-zinc-500">
                  <p className="text-sm flex items-center gap-2">
                    <ScanFace className="w-5 h-5" />
                    Identidades Visuais
                  </p>
                  <span className="font-bold text-lg text-chart-2">11</span>
                </div>

                <div className="w-full flex justify-between items-center border-b border-zinc-500">
                  <p className="text-sm flex items-center gap-2">
                    <Origami className="w-5 h-5" />
                    Criativos para redes
                  </p>
                  <span className="font-bold text-lg text-chart-2">22</span>
                </div>
              </div>
            </div>

            <div className="flex-1 h-44 py-3 px-4 bg-preto/35 backdrop-blur-md rounded-xl">
              <h1 className="font-bold">Avaliações dos Clientes</h1>

              <div className="w-full h-24 mt-4 flex flex-col justify-between items-center">
                <div className="w-full flex item-center justify-between border-b border-zinc-500">
                  <p>Total de Avaliações na Semana</p>
                  <span className="text-chart-2 font-bold text-xl">7</span>
                </div>

                <div className="flex flex-row gap-3">
                  <IoMdStar className="w-10 h-10 text-chart-2" />
                  <IoMdStar className="w-10 h-10 text-chart-2" />
                  <IoMdStar className="w-10 h-10 text-chart-2" />
                  <IoMdStar className="w-10 h-10 text-chart-2" />
                  <IoMdStarHalf className="w-10 h-10 text-chart-2" />
                </div>
              </div>
            </div>

            <div className="flex-1 h-44 py-3 px-4 bg-preto/35 backdrop-blur-md rounded-xl">
              <h1 className="font-bold">Próximas Entregas Programadas</h1>

              <div className="w-full h-32 flex flex-col justify-evenly">
                <div className="w-full flex justify-between items-center border-b border-zinc-500">
                  <p className="text-xs flex items-center gap-2">
                    <TbUrgent className="w-5 h-5 text-red-500" />
                    Identidade Visual{" "}
                    <span className="font-bold">MegaSHARK</span>
                  </p>
                  <span className="font-bold text-sm text-chart-2">
                    11/ NOV/ 24
                  </span>
                </div>

                <div className="w-full flex justify-between items-center border-b border-zinc-500">
                  <p className="text-xs flex items-center gap-2">
                    <TbUrgent className="w-5 h-5 text-red-500" />
                    Identidade Visual{" "}
                    <span className="font-bold">MONTRELO</span>
                  </p>
                  <span className="font-bold text-sm text-chart-2">
                    12/ NOV/ 24
                  </span>
                </div>

                <div className="w-full flex justify-between items-center border-b border-zinc-500">
                  <p className="text-sm flex items-center gap-2">
                    <FolderCode className="w-5 h-5 text-emerald-500" />
                    Criativos para redes
                  </p>
                  <span className="font-bold text-sm text-chart-2">
                    22/ NOV/ 24
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
