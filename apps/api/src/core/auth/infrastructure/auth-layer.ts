import { Effect, Layer } from "effect";
import { AuthService } from "../application/auth-service.js";
import { UnauthorizedError } from "../domain/error.js";
import type { Auth } from "./better-auth.js";

export function makeAuthServiceLive(auth: Auth){
    return Layer.succeed(AuthService, {
        getUser: (headers) => {
            return Effect.gen(function*() {
                const session = yield* Effect.tryPromise({
                    try: () => auth.api.getSession({ headers }),
                    catch: () => new UnauthorizedError()
                })

                if(!session) {
                    return yield* Effect.fail(new UnauthorizedError())
                }

                return {
                    id: session.user.id,
                    name: session.user.name,
                    image: session.user.image || ""
                }
            })
        }
    })
}