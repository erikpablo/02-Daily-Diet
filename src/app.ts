import cookie from '@fastify/cookie'
import fastify from 'fastify'
import { usersRoutes } from './routes/users.route.ts'
import { mealsRoutes } from './routes/meals.route.ts'

export const app = fastify()

app.register(cookie)
app.register(usersRoutes)
app.register(mealsRoutes)
