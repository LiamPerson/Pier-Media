import Head from '@/components/BasePage/Head'
import '@/styles/global.css'

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
