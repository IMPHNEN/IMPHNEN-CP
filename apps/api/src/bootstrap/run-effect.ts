import { Cause, Effect, Exit, Option } from "effect";
import { ORPCError } from "@orpc/server";
import { runtime } from "#/bootstrap/runtime";

type ErrorMapper<E extends { _tag: string }> = {
    [K in E['_tag']]: (error: Extract<E, { _tag: K }>) => ORPCError<any, any>
}

export async function runEffect<A, E extends { _tag: string }>(
    effect: Effect.Effect<A, E, any>,
    mapError: ErrorMapper<E>
) {
    const exit = await runtime.runPromiseExit(effect)

    if(Exit.isSuccess(exit)){
        return exit.value
    }

    const failure = Cause.failureOption(exit.cause)

    if(Option.isSome(failure)){
        const error = failure.value
        throw mapError[error._tag as E['_tag']](error as any)
    }

    throw new ORPCError('INTERNAL_SERVER_ERROR')
}