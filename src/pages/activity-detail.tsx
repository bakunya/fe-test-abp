import { Suspense } from "react"
import { lazily } from "react-lazily"
import LoadingTextCenter from "@/ui-components/loading-text-center"
const { ActivityDetailModule } = lazily(() => import("@/modules/activity-detail"))

export default function ActivityDetail() {
	return (
		<Suspense fallback={ <LoadingTextCenter /> }>
			<ActivityDetailModule />
		</Suspense>
	)
}