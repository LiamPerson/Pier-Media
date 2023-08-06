import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

const parseErrorToString = (error: { instancePath: string; keyword: string; message: string }) => {
	return `Error with ${error.keyword} in ${error.instancePath}: ${error.message}. `
}

export const getErrorDetails = (error: any) => {
	let errorDetails = (error?.code ? error.code : 'UNKNOWN_ERROR') + ': '

	if (error?.message) {
		errorDetails += error.message
	}

	const errors = error?.response?.data?.errors
	if (errors) {
		errorDetails += ' - '
		if (Array.isArray(errors)) {
			errorDetails += errors.map((e) => parseErrorToString(e)).join(' && ')
		} else {
			errorDetails += JSON.stringify(errors)
		}
	}
	return errorDetails
}

export default queryClient
