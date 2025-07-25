import type { FastifyReply, FastifyRequest } from 'fastify'
import { knex } from '../database.ts'

export async function checkSessionIdExists(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { sessionId } = request.cookies

  if (!sessionId) {
    return reply.status(403).send({
      error: 'Unauthorized',
    })
  }

  const user = await knex('users').where('session_id', sessionId).first()

  if (!user) {
    return reply.status(403).send({
      error: 'Unauthorized',
    })
  }

  request.user = user
}
