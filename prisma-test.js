import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.$queryRaw`SELECT * FROM resumebuilder.users`;
  console.log(users);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
