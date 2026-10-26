import { getCurrentUser } from "../application/auth-service";
import { os } from "#/bootstrap/os";
import { runEffect } from "#/bootstrap/run-effect";

export const authRouter = {
    me: os.auth.me.handler(({context, errors}) => runEffect(getCurrentUser(context.headers), {
        UnauthorizedError: () => errors.UNAUTHORIZED()
    }))
}