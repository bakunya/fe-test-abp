import { useDeleteActivity, useGetActivityList, usePostActivity } from "@/adapters/activity/hook"
import ActivityHeader from "@/modules/dashboard/components/activity-header"
import { useNavigate } from "react-router-dom"
import { match } from "ts-pattern"
import CardActivity from "./components/card-activity"
import AlertSuccessDelete from "./components/alert-success-delete"
import { useState } from "react"

export function DashboardModule() {
	const navigate = useNavigate()
	const mutate = usePostActivity()
	const mutateDelete = useDeleteActivity()
	const [open, setOpen] = useState(true)
	const { data, isLoading, isError } = useGetActivityList()

	const handleMutate = () => {
		mutate.mutate({
			title: "New Activity"
		})
	}

	const handleDelete = (id: number) => {
		mutateDelete.mutate({ id }, { onSuccess: () => {
			setOpen(true);
		} })
	}

	const handleRedirect = (id: number) => {
		navigate(`/activity/${id}`)
	}

	return (
		<div className="max-w-[1200px] mx-auto flex flex-col mt-7">
			<ActivityHeader onCreateActivity={ handleMutate } />
			<AlertSuccessDelete open={open} onClose={() => setOpen(false)} />
			{
				match([isError, isLoading, Array.isArray(data?.data), data?.data?.length < 1])
					.with([false, false, true, true], () => (
						<div className="flex justify-center items-center mt-12">
							<button onClick={ handleMutate } data-cy="activity-empty-state">
								<img src="/activity-empty-state.svg" alt="new activity" className="w-full max-w-[767px]" />
							</button>
						</div>
					))
					.with([false, false, true, false], () => (
						<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
							{
								data.data.map((item: { id: number; title: string; created_at: string }) => (
									<CardActivity
										item={ item }
										key={ item.id }
										onDelete={ handleDelete }
										onRedirect={ handleRedirect }
									/>
								))
							}
						</main>
					))
					.otherwise(() => null)
			}
		</div>
	)
}