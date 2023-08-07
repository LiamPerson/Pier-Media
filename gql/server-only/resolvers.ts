import { Resolvers } from '../codegen/resolvers-types'

const resolvers: Resolvers = {
	Query: {
		hello: () => 'world!',
	},
}

export default resolvers
