import { serve } from '@hono/node-server'
import { RPCHandler } from '@orpc/server/fetch'
import { Hono } from 'hono'
import { router } from './bootstrap/router'
import { onError } from '@orpc/server'
import { cors } from 'hono/cors'
import { auth } from './bootstrap/runtime'
import "dotenv/config"

const app = new Hono()

const handler = new RPCHandler(router, {
	interceptors: [onError((error) => console.error(error))],
})

const corsOptions = { origin: '*', credentials: true }

app.use('/rpc/*', cors(corsOptions))
app.use('/api/auth', cors(corsOptions))

app.on(['GET', 'POST'], '/api/auth/*', (c) => auth.handler(c.req.raw))

app.use('/rpc/*', async(c, next) => {
	const { matched, response } = await handler.handle(c.req.raw, {
		prefix: '/rpc',
		context: async() => ({
			headers: c.req.raw.headers,
		})
	})

	if(matched){
		return c.newResponse(response.body, response)
	}

	await next()
})

serve({
	fetch: app.fetch,
	port: 3000
}, (info) => {
  	console.log(`Server is running on http://localhost:${info.port}`)
})
