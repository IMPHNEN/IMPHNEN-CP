import { authGetMeQueryOptions } from "#/features/queries/auth-queries";
import { useQuery } from "@tanstack/react-query";

export function useAuth() {
    const { data: sessionUser, isError, isPending } = useQuery(authGetMeQueryOptions())

    return {
        sessionUser,
        isError,
        isPending,
    }
}