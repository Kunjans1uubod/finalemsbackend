import { PrismaClient } from "@prisma/client";

// INFO: Prevent multiple Prisma Client instances in development (hot-reload)
const prisma = global.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
