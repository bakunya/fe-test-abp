import NavbarComponent from "@/ui-components/navbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
	return (
		<>
			<NavbarComponent />
			<Outlet />
		</>
	)
}