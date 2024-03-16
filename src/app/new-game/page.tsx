"use client";

import Stepper from "@/components/XStepper";
import { useRouter } from "next/navigation";
import XButton from "../../components/XButton";
import XIcon from "../../components/XIcon";

export default function NewGamePage() {
  const router = useRouter();
  const play_game_uuid = crypto.randomUUID();

  console.log({ play_game_uuid });

  return (
    <>
      <section className="flex w-full flex-col">
        <div className="flex flex-col text-left">
          <h2 className="font-bold">Configurações de partida</h2>
          <span className="font-light">Personalize a partida como quiser</span>
          <hr />
        </div>
        <div className="flex flex-col items-center gap-4 p-10">
          <div className="flex">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-500">
              <XIcon className="h-7 w-7 text-gray-800 dark:text-white" />
            </div>
            <div className="ml-4">
              <p className="text-xl font-bold">Palavras por turno</p>
              <p className="text-left font-light text-gray-500"> 1 Palavra</p>
              <Stepper min={1} max={7} step={1} />
            </div>
          </div>
          <div className="flex">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-500">
              <XIcon className="h-7 w-7 text-gray-800 dark:text-white" />
            </div>
            <div className="ml-4">
              <p className="text-xl font-bold">Tempo por turno</p>
              <p className="text-left font-light text-gray-500">30 Segundos</p>
              <Stepper min={30} max={210} step={30} />
            </div>
          </div>
          <div className="flex">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-500">
              <XIcon className="h-7 w-7 text-gray-800 dark:text-white" />
            </div>
            <div className="ml-4">
              <p className="text-xl font-bold">Pulos por turno</p>
              <p className="text-left font-light text-gray-500">30 Pulos</p>
              <Stepper min={0} max={7} step={1} />
            </div>
          </div>
        </div>
      </section>

      <XButton onClick={() => router.push(`/play/${play_game_uuid}`)}>
        Iniciar
      </XButton>
    </>
  );
}
