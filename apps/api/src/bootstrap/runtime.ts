import { Layer, ManagedRuntime } from "effect";
import { createAuth } from "#/core/auth/infrastructure/better-auth";
import { makeAuthServiceLive } from "#/core/auth/infrastructure/auth-layer";
import { prisma } from "#/libs/prisma";

export const auth = createAuth(prisma)

const AppLayer = Layer.mergeAll(
    makeAuthServiceLive(auth)
)

export const runtime = ManagedRuntime.make(AppLayer)