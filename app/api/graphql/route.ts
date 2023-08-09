import resolvers from '@/gql/server-only/resolvers'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { readFileSync } from 'fs'
import { NextRequest } from 'next/server'
import path from 'path'

const typeDefs = readFileSync(path.resolve('./gql/schema.graphql')).toString('utf-8')

const server = new ApolloServer({
	resolvers,
	typeDefs,
})

const handler = startServerAndCreateNextHandler(server)

export async function GET(request: NextRequest) {
	return handler(request)
}

export async function POST(request: NextRequest) {
	return handler(request)
}
