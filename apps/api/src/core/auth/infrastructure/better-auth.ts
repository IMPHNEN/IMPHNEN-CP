import type { PrismaClient } from "@prisma/client/extension";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

export function createAuth(db: PrismaClient){
    return betterAuth({
        database: prismaAdapter(db, { provider: "postgresql" }),
        emailAndPassword: { enabled: false }
    })
}

export type Auth = ReturnType<typeof createAuth>