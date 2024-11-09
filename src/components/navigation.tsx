import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ChartNoAxesCombined,
  Cog,
  FolderCheck,
  FolderEdit,
  Headset,
  Layers,
  LogOut,
  Users,
  WalletMinimal,
} from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="w-72 h-full p-3 flex flex-col justify-between bg-zinc-300/30 backdrop-blur-sm rounded-r-2xl">
      <div className="flex items-center gap-3 mt-5">
        <Avatar>
          <AvatarImage src="https://github.com/EmanoelSants.png" />
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-1">
          <p className="text-sm font-bold">Emanoel Felix</p>
          <div className="flex flex-row items-center gap-1">
            <span className="text-xs bg-zinc-800 w-24 h-5 flex items-center justify-center p-1 rounded-lg">
              Dev Fullstack
            </span>

            <span className="text-xs bg-zinc-800 w-16 h-5 flex items-center justify-center p-1 rounded-lg">
              CTO
            </span>

            <button className="text-xs bg-zinc-800 w-7 h-7 flex items-center justify-center p-1 rounded-full select-none cursor-pointer hover:bg-zinc-700 transition-colors">
              +3
            </button>
          </div>
        </div>
      </div>

      <div className="-mt-10 h-auto flex flex-col gap-1 font-medium text-gray-300">
        <button className="hover:bg-zinc-200/25 backdrop-blur-sm px-1 py-2 rounded-lg flex gap-2 transition-colors">
          <Users />
          Clientes
        </button>

        <button className="hover:bg-zinc-200/25 backdrop-blur-sm px-1 py-2 rounded-lg flex gap-2 transition-colors">
          <FolderEdit />
          Serviços em Andamento
        </button>

        <button className="hover:bg-zinc-200/25 backdrop-blur-sm px-1 py-2 rounded-lg flex gap-2 transition-colors">
          <FolderCheck />
          Projetos Finalizados
        </button>

        <button className="hover:bg-zinc-200/25 backdrop-blur-sm px-1 py-2 rounded-lg flex gap-2 transition-colors">
          <ChartNoAxesCombined />
          Marketing e Vendas
        </button>

        <button className="hover:bg-zinc-200/25 backdrop-blur-sm px-1 py-2 rounded-lg flex gap-2 transition-colors">
          <Layers />
          Relatórios e Análises
        </button>

        <button className="hover:bg-zinc-200/25 backdrop-blur-sm px-1 py-2 rounded-lg flex gap-2 transition-colors">
          <WalletMinimal />
          Financeiro
        </button>

        <button className="hover:bg-zinc-200/25 backdrop-blur-sm px-1 py-2 rounded-lg flex gap-2 transition-colors">
          <Headset />
          Client Support
        </button>

        <button className="hover:bg-zinc-200/25 backdrop-blur-sm px-1 py-2 rounded-lg flex gap-2 transition-colors">
          <Cog />
          Configurações
        </button>
      </div>

      <Button className="text-base" variant={"destructive"}>
        Sair da conta
        <LogOut />
      </Button>
    </nav>
  );
}
