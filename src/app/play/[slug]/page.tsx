"use client";

import XStepper from "@/components/XStepper";
import { useEffect, useState } from "react";

type PreviousGames = {
  slug: string;
  matchConfig: {};
}[];

export default function PlayPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const gameStorageKey = "sk@game_config";
  const alreadyInRoom = localStorage.getItem(gameStorageKey);
  const maxSeconds = 210;
  const [cronometerSeconds, setCronometerSeconds] = useState(maxSeconds);

  if (!alreadyInRoom) {
    localStorage.setItem(
      gameStorageKey,
      JSON.stringify([
        {
          slug,
          matchConfig: {},
        },
      ]),
    );
  } else {
    const lastGame = JSON.parse(
      localStorage.getItem(gameStorageKey)!,
    ) as PreviousGames;
    const sameGame = lastGame.find((game) => game.slug == slug);
    if (!sameGame) {
      lastGame.push({ slug, matchConfig: {} });
      localStorage.setItem(gameStorageKey, JSON.stringify(lastGame));
    }
  }
  const players = [
    { name: "Maria" },
    { name: "Arthur" },
    { name: "João" },
    { name: "Gisele" },
  ];

  useEffect(() => {
    const unsubscribe = setTimeout(() => {
      if (cronometerSeconds > 0) {
        setCronometerSeconds(cronometerSeconds - 1);
      }
    }, 1000);

    return () => clearTimeout(unsubscribe);
  }, [cronometerSeconds]);

  return (
    <section className=" flex min-h-96 flex-1 justify-center">
      <aside className="flex min-w-24 max-w-24 flex-col items-center justify-center gap-4">
        {players.map((player, id) => (
          <div className="flex h-full w-full" key={id}>
            <div className="flex w-full flex-1 cursor-pointer items-center justify-center rounded bg-zinc-100 shadow  hover:bg-zinc-200">
              <span>{player.name}</span>
            </div>
            <div className="flex flex-col">
              <small>1x</small>
            </div>
          </div>
        ))}
      </aside>
      <section className="flex min-w-full flex-1 flex-col items-center justify-center gap-4">
        <div className="flex flex-1"></div>
        <div className="flex h-24 w-24 items-center justify-center rounded-full  bg-emerald-50 shadow-md hover:bg-emerald-200  ">
          <h1>Palavra Misteriosa </h1>
        </div>
        <div className="flex  flex-1 items-end justify-center">
          <XStepper
            min={0}
            max={maxSeconds}
            step={1}
            value={cronometerSeconds}
            onChange={(e) => setCronometerSeconds(Number(e.target.value))}
          />
        </div>
      </section>
      <aside className="flex min-w-24 max-w-24  flex-col items-center justify-center gap-4">
        {players.map((player, id) => (
          <div className="flex h-full w-full" key={id}>
            <div className="flex flex-col">
              <small>1x</small>
            </div>
            <div className="flex w-full flex-1 cursor-pointer items-center justify-center rounded bg-zinc-100 shadow  hover:bg-zinc-200">
              <span>{player.name}</span>
            </div>
          </div>
        ))}
      </aside>
    </section>
  );
}
