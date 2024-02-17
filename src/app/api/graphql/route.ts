import resolvers from '@/gql/server-only/resolvers'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { readFileSync } from 'fs'
import path from 'path'

const typeDefs = readFileSync(path.resolve('./gql/schema.graphql')).toString('utf-8')

const server = new ApolloServer({
	resolvers,
	typeDefs,
})

const handler = startServerAndCreateNextHandler(server)

export { handler as GET, handler as POST }
