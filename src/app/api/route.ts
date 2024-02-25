import { prisma } from "./core/repositories/prisma";

export async function GET() {
  const word = await prisma.word.create({
    data: {
      name: "Teste",
    },
  });
  return Response.json(word);
}
