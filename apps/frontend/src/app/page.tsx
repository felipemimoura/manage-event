import LogoBig from "@/components/template/LogoBig";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="
      h-screen flex flex-col justify-center items-center gap-10
      bg-[url('/background-elementos.svg')] bg-cover
    "
    >
      <div className="flex flex-col items-center gap-4">
        <LogoBig />
        <p className="text-zinc-500 font-light w-96 leading-6 text-center select-none">
          Crie e gerencie o convite do seu evento de forma rápida e facil, sem
          complicações
        </p>
      </div>

      <Link href="/event" className="botao azul text-lg uppercase">
        Crie o seu evento
      </Link>
    </div>
  );
}
