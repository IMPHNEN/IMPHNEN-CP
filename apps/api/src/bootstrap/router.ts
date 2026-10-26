import { authRouter } from "#/core/auth/presentation/auth-router";
import { os } from "./os";

export const router = os.router({
    auth: authRouter
})