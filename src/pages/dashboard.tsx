import { Suspense } from "react"
import { lazily } from "react-lazily"
import LoadingTextCenter from "@/ui-components/loading-text-center"
const { DashboardModule } = lazily(() => import("@/modules/dashboard"))

export default function Dashboard() {
	return (
		<Suspense fallback={ <LoadingTextCenter /> }>
			<DashboardModule />
		</Suspense>
	)
}