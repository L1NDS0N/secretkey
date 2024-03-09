import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guess What The Game",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-200 antialiased`}>
        <div className="flex min-h-screen items-center justify-center bg-gray-100 text-gray-700 dark:bg-zinc-900">
          <div className="flex w-full max-w-xl flex-col items-center rounded bg-white p-8 text-center shadow-md dark:bg-zinc-300">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
