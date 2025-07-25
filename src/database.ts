import knexPKG, { type Knex } from 'knex'
import { env } from './env/index.ts'

const { knex: setupKnex } = knexPKG

export const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
