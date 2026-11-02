import { authGetMeQueryOptions } from "#/features/queries/auth-queries";
import type { TUserSchema } from "@apps/schemas";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function useAuth(){
    const [ sessionUser, setSessionUser ] = useState<TUserSchema>()
    const { data, isError } = useQuery(authGetMeQueryOptions())

    useEffect(() => {
        if(data){
            setSessionUser(data)
            return
        }

        if(isError) {
            setSessionUser({
                id: "",
                name: "",
                image: ""
            })
        }
    }, [sessionUser, data])

    return {
        sessionUser
    }
}