import { ApolloClient, InMemoryCache } from '@apollo/client'

const resolveGraphLocation = () => {
	if (typeof window === 'undefined') {
		return 'http://localhost:3000/api/graphql'
	}
	return `${document.location.origin}/api/graphql`
}

export const apollo = new ApolloClient({
	uri: resolveGraphLocation(),
	cache: new InMemoryCache(),
})
