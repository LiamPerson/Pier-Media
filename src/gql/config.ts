import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	overwrite: true,
	schema: 'src/gql/schema.graphql',
	documents: 'src/gql/operations/**/*.graphql',
	generates: {
		'./src/gql/codegen/': {
			preset: 'client',
			plugins: [],
		},
		'./src/gql/codegen/resolvers-types.ts': {
			plugins: ['typescript', 'typescript-resolvers'],
		},
	},
}

export default config
