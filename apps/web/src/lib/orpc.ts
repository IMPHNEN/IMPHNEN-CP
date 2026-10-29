import { createORPCClient } from "@orpc/client"
import { RPCLink } from "@orpc/client/fetch"
import type { ContractRouterClient } from "@orpc/contract"
import type { contract } from "@apps/contract"

const link = new RPCLink({
    origin: `${import.meta.env.VITE_API_URL}`,
    url: "/rpc",
    fetch: (request, init) => globalThis.fetch(request, { ...init, credentials: "include" })
})

export const orpc: ContractRouterClient<typeof contract> = createORPCClient(link)