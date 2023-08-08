import { PrismaClient } from '@prisma/client'

export const preferIsoStringMiddleware = (prisma: PrismaClient) => {
	prisma.$extends({
		query: {
			$allModels: {
				$allOperations({ model, operation, args, query }) {
					console.log('Hello, world!')
					console.log('Model', model)
					console.log('operation', operation)
					console.log('args', args)
					console.log('query', query)
					return query(args)
				},
			},
		},
	})
	return prisma
}
