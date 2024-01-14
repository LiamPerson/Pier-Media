import DashboardPage from '@/components/core/DashboardPage'

const Loading = ({ children }: { children: React.ReactNode }) => {
	return (
		<DashboardPage>
			<h2>Loading...</h2>
			{children}
		</DashboardPage>
	)
}

export default Loading
