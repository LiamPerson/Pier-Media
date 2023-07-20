import Head from '@/components/BasePage/Head'

interface GenericPageProps {
	children: React.ReactNode
}
const BasePage = ({ children }: GenericPageProps) => {
	return (
		<>
			<Head />
			{children}
		</>
	)
}

export default BasePage
