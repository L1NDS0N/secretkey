"use client";

import XButton from "@/components/XButton";
import { useRouter } from "next/navigation";
import guessWhatImg from "../../assets/guess-what.png";
export default function WelcomePage() {
  const router = useRouter();

  return (
    <>
      <img
        alt="Secret Key"
        className="mb-6 max-w-sm rounded-lg"
        src={guessWhatImg.src}
      />

      <p className="mb-6 text-lg">
        Tente adivinhar a palavra oculta e divirta-se.
      </p>
      <XButton
        onClick={() => router.push("/new-game")}
        className="w-full max-w-md rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-400"
      >
        Novo Jogo
      </XButton>
    </>
  );
}
