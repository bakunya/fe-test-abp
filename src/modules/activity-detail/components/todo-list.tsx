import { useGetTodoList } from "@/adapters/todo/hook"
import CardTodo from "./card-todo"
import { useSortStore } from "@/store/sort"
import { match } from "ts-pattern"

export default function TodoList({ id }: { id: number }) {
	const q = useSortStore(s => s.type)
	const { data } = useGetTodoList(id)

	return (
		<div className="mt-12">
			{
				match([Array.isArray(data?.data) && data?.data?.length > 0, q])
					.with([true, 'terbaru'], () => data?.data.sort((a: any, b: any) => b.id - a.id).map((x: any) => (<CardTodo key={ x.id } isActive={ x.is_active } priority={ x.priority } title={ x.title } id={ x.id } />)))
					.with([true, 'terlama'], () => data?.data.sort((a: any, b: any) => a.id - b.id).map((x: any) => (<CardTodo key={ x.id } isActive={ x.is_active } priority={ x.priority } title={ x.title } id={ x.id } />)))
					.with([true, 'a-z'], () => data?.data.sort((a: any, b: any) => a.title.localeCompare(b.title)).map((x: any) => (<CardTodo key={ x.id } isActive={ x.is_active } priority={ x.priority } title={ x.title } id={ x.id } />)))
					.with([true, 'z-a'], () => data?.data.sort((a: any, b: any) => b.title.localeCompare(a.title)).map((x: any) => (<CardTodo key={ x.id } isActive={ x.is_active } priority={ x.priority } title={ x.title } id={ x.id } />)))
					.with([true, 'belum-selesai'], () => data?.data.sort((a: any, b: any) => b.is_active - a.is_active).map((x: any) => (<CardTodo key={ x.id } isActive={ x.is_active } priority={ x.priority } title={ x.title } id={ x.id } />)))
					.otherwise(() => (
						<div className="flex justify-center items-center mt-12">
							<div data-cy="todo-empty-state">
								<img src="/todo-empty-state.svg" alt="new activity" className="w-full max-w-[767px]" />
							</div>
						</div>
					))
			}
		</div>
	)
}
