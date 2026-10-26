import { Context, Effect } from 'effect'
import type { TUserSchema } from '@apps/schemas'
import type { UnauthorizedError } from '../domain/error'

export class AuthService extends Context.Tag("AuthService")<
    AuthService,
    {
        readonly getUser: (headers: Headers) => Effect.Effect<TUserSchema, UnauthorizedError>
    }
>(){}

export function getCurrentUser(headers: Headers){
    return Effect.gen(function*() {
        const auth = yield* AuthService
        return yield* auth.getUser(headers)
    })
}