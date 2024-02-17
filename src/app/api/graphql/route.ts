import { readFileSync } from 'fs'
import path from 'path'

import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'

import resolvers from '@/gql/server-only/resolvers'

const typeDefs = readFileSync(path.resolve('./src/gql/schema.graphql')).toString('utf-8')

const server = new ApolloServer({
	resolvers,
	typeDefs,
})

const handler = startServerAndCreateNextHandler(server)

export { handler as GET, handler as POST }
