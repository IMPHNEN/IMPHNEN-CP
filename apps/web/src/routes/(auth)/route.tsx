import { useAuth } from '#/hooks/use-auth'
import { createFileRoute, Outlet, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/(auth)')({
    component: RouteComponent,
})

function RouteComponent() {
    const { sessionUser, isError, isPending } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isPending && (isError || !sessionUser?.id)) {
            navigate({ to: "/" })
        }
    }, [isError, isPending, navigate, sessionUser])

    return (
        <>
            <Outlet />
        </>
    )
}
