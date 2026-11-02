import { orpc } from "#/lib/orpc";

export const authApi = {
    me: () => orpc.auth.me()
}