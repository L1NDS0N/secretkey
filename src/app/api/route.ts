import { prisma } from "./core/repositories/prisma";

export async function GET() {
  const word = await prisma.$transaction(async (prisma) => {
    const createdWord = await prisma.word.create({
      data: {
        name: "Teste",
      },
    });
    return createdWord;
  });
  return Response.json(word);
  }
  
  
