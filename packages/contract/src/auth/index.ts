import { oc } from "@orpc/contract"
import { openapi } from "@orpc/openapi"
import { UserSchema } from "@apps/schemas"

export const authContract = {
    me: oc.meta(openapi({
        method: "GET",
        path: "/me"
    }))
    .output(UserSchema)
    .errors({ UNAUTHORIZED: {} })
}