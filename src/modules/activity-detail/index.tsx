import { match } from "ts-pattern";
import { useParams } from "react-router-dom";
import TodoList from "./components/todo-list";
import ActivityDetailHeader from "./components/activity-detail-header";
import { useGetActivity } from "@/adapters/activity/hook";

export function ActivityDetailModule() {
	const param = useParams()
	const { data } = useGetActivity({ id: param.id as unknown as number })
	
	return (
		<div className="max-w-[1200px] mx-auto flex flex-col mt-7">
			{ match(Boolean(data))
				.with(true, () => (
					<>
						<ActivityDetailHeader id={data.id} name={data.title} />
						<TodoList id={data.id as unknown as number} />
					</>
				))
				.otherwise(() => null) }
		</div>
	)
}