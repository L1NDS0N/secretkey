import { ButtonHTMLAttributes } from "react";

type XButton = ButtonHTMLAttributes<HTMLButtonElement>;
export default function XButton({ children, ...rest }: XButton) {
  return (
    <button
      className="w-full max-w-md rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-400"
      {...rest}
    >
      {children}
    </button>
  );
}
