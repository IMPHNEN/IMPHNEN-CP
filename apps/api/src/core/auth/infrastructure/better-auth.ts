import type { PrismaClient } from "@prisma/client/extension";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

export function createAuth(db: PrismaClient){
    return betterAuth({
        database: prismaAdapter(db, { provider: "postgresql" }),
        trustedOrigins: [process.env.WEB_URL || "http://localhost:5173"],
        emailAndPassword: { enabled: false },
        socialProviders: {
            "discord": {
                clientId: process.env.DISCORD_CLIENT_ID || "",
                clientSecret: process.env.DISCORD_SECRET || ""
            }
        }
    })
}

export type Auth = ReturnType<typeof createAuth>