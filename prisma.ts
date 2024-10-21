import { PrismaClient } from "@prisma/client";

const prismaClientSinglton = () => {
    return new PrismaClient()
}