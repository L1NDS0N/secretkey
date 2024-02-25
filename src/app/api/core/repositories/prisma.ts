import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

async function transaction(query: () => Promise<void>) {
  query()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
