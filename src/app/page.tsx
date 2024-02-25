export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col ">
        <div className="flex flex-row">
          <div className="bg-slate-500 w-16 h-16 rounded-full flex justify-center items-center">
            <svg
              className="w-7 h-7 text-gray-800 dark:text-white"
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
          <div className="flex flex-col ml-4">
            <p className="font-bold text-xl">Palavras por turno</p>
            <p className="font-normal text-lg">Palavras {}</p>
          </div>
        </div>
        <ol className="flex items-center w-full mt-3">
          <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
            <span className="flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full dark:bg-blue-800 shrink-0">
              <p className="text-xs text-white">1</p>
            </span>
          </li>
          <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
            <span className="flex items-center justify-center w-5 h-5 bg-gray-100 rounded-full dark:bg-gray-700 shrink-0">
              <p className="text-xs text-white">1</p>
            </span>
          </li>
          <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
            <span className="flex items-center justify-center w-5 h-5 bg-gray-100 rounded-full dark:bg-gray-700 shrink-0">
              <p className="text-xs text-white">1</p>
            </span>
          </li>
          <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
            <span className="flex items-center justify-center w-5 h-5 bg-gray-100 rounded-full dark:bg-gray-700 shrink-0">
              <p className="text-xs text-white">1</p>
            </span>
          </li>
          <li className="flex items-center">
            <span className="flex items-center justify-center w-5 h-5 bg-gray-100 rounded-full dark:bg-gray-700 shrink-0">
              <p className="text-xs text-white">1</p>
            </span>
          </li>
        </ol>
      </div>
    </main>
  )
}
