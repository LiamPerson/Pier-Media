import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	overwrite: true,
	schema: 'gql/schema.graphql',
	documents: 'gql/operations/**/*.graphql',
	generates: {
		'./gql/codegen/': {
			preset: 'client',
			plugins: [],
		},
		'./gql/codegen/resolvers-types.ts': {
			plugins: ['typescript', 'typescript-resolvers'],
		},
	},
}

export default config
