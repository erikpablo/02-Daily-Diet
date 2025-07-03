import fastify from 'fastify'
import { usersRoutes } from './routes/users.router.ts'
import cookie from '@fastify/cookie'

export const app = fastify()

app.register(cookie)
app.register(usersRoutes)
