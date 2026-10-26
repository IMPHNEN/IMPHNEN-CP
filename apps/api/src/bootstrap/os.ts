import { implement } from '@orpc/server'
import { contract } from '@apps/contract'

export interface AppContext {
    headers: Headers
}

export const os = implement<typeof contract, AppContext>(contract)