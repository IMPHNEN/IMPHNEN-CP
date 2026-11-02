import { queryOptions } from "@tanstack/react-query"
import { authKeys } from "../keys/auth-keys"
import { authApi } from "../api/auth-api"

export function authGetMeQueryOptions(){
    return queryOptions({
        queryKey: authKeys.all,
        queryFn: authApi.me
    })
}