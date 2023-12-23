import routes from "./routes"
import { RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export const queryClient = new QueryClient();

function App() {
	return (
		<>
			<QueryClientProvider client={ queryClient }>
				<RouterProvider
					router={ routes }
					fallbackElement={ <div>Loading...</div> }
				/>
			</QueryClientProvider>
		</>
	)
}

export default App
