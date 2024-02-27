import guessWhatImg from "../assets/guess-what.png";

export default function Welcome() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 text-gray-700 dark:bg-zinc-900">
        <div className="flex w-full max-w-xl flex-col items-center rounded bg-white p-8 text-center shadow-md dark:bg-zinc-300">
          <img
            alt="Secret Key"
            className="mb-6 max-w-sm rounded-lg"
            src={guessWhatImg.src}
          />

          <p className="mb-6 text-lg">
            Tente adivinhar a palavra oculta e divirta-se.
          </p>
          <button className="w-full max-w-md rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-400">
            Novo Jogo
          </button>
        </div>
      </div>
    </>
  );
}
