export default function NewGamePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col ">
        <div className="flex flex-row">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-500">
            <svg
              className="h-7 w-7 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 5h4.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0-7H6m2 7h6.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0 0H6"
              />
            </svg>
          </div>
          <div className="ml-4 flex flex-col">
            <p className="text-xl font-bold">Palavras por turno</p>
            <p className="text-lg font-normal">Palavras {}</p>
          </div>
        </div>
        <ol className="mt-3 flex w-full items-center">
          <li className="flex w-full items-center text-blue-600 after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:border-blue-100 after:content-[''] dark:text-blue-500 dark:after:border-blue-800">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800">
              <p className="text-xs text-white">1</p>
            </span>
          </li>
          <li className="flex w-full items-center after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:border-gray-100 after:content-[''] dark:after:border-gray-700">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
              <p className="text-xs text-white">1</p>
            </span>
          </li>
          <li className="flex w-full items-center after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:border-gray-100 after:content-[''] dark:after:border-gray-700">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
              <p className="text-xs text-white">1</p>
            </span>
          </li>
          <li className="flex w-full items-center after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:border-gray-100 after:content-[''] dark:after:border-gray-700">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
              <p className="text-xs text-white">1</p>
            </span>
          </li>
          <li className="flex items-center">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
              <p className="text-xs text-white">1</p>
            </span>
          </li>
        </ol>
      </div>
    </main>
  );
}
