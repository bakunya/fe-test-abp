import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "./layout/dashboard"
import Dashboard from "./pages/dashboard"
import ActivityDetail from "./pages/activity-detail"

const routes = createBrowserRouter([
	{
		path: "",
		element: <DashboardLayout />,
		children: [
			{
				path: "",
				element:<Dashboard />
			}
		]
	},
	{
		path: "activity/:id",
		element: <DashboardLayout />,
		children: [
			{
				path: "",
				element:<ActivityDetail />
			}
		]
	}
])

export default routes