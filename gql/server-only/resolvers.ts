import { Resolvers } from '../codegen/resolvers-types'

const resolvers: Resolvers = {
	Query: {
		hello: () => '123',
	},
}

export default resolvers
