import Head from '@/components/Head'
interface GenericPageProps {
	children: React.ReactNode
}
const GenericPage = ({ children }: GenericPageProps) => {
	return (
		<>
			<Head />

			{children}
		</>
	)
}

export default GenericPage
