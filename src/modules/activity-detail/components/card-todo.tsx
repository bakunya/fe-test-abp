import { usePutTodo } from "@/adapters/todo/hook";
import { clsx } from "clsx";
import { match } from "ts-pattern";
import TodoAction from "./todo-action";
import DeleteTodo from "./delete-item";

export default function CardTodo({ priority, isActive, title, id }: { isActive: 0 | 1, priority: string, title: string, id: number }) {
	const mutate = usePutTodo()


	const handleActivation = () => {
		mutate.mutate({ id, toSave: { is_active: isActive === 0 ? 1 : 0, title, priority } })
	}

	const handleUpdate = (q: Record<string, string | number>) => {
		mutate.mutate({
			id, toSave: {
				is_active: isActive,
				title: q.title as string,
				priority: q.priority as string,
			}
		})
	}

	return (
		<div className="p-7 mt-5 flex items-center shadow-[0_4px_8px_rgba(0,0,0,.15)] rounded-lg" data-cy="todo-item">
			<input onChange={ handleActivation } type="checkbox" className="w-[20px] h-[20px]" checked={ !Boolean(isActive) } data-cy="todo-item-checkbox"  />
			<span
				data-cy="todo-item-priority-indicator"
				className={
					clsx(
						"p-[6px] ml-4 rounded-full",
						match(priority.split("-").join(" "))
							.with('very high', () => 'bg-[#ed4c5c]')
							.with('high', () => 'bg-[#f8a541]')
							.with('medium', () => 'bg-[#00a790]')
							.with('low', () => 'bg-[#428bc1]')
							.with('very low', () => 'bg-[#8942c1]')
							.otherwise(() => 'bg-[#92D050]')
					)
				}
			/>
			{ match(isActive)
				.with(0, () => <span data-cy="todo-item-title" className="font-[500] text-base text-gray-400 ml-3 line-through">{ title }</span>)
				.otherwise(() => <span data-cy="todo-item-title" className="font-[500] text-base text-black ml-3">{ title }</span>) }
			<TodoAction
				ButtonAction={ (
					<button className="ml-3" data-cy="todo-item-edit-button">
						<img src="/todo-title-edit-button.svg" alt="edit" className="w-[20px]" />
					</button>
				) }
				title="Edit Item"
				defaultName={ title }
				onAction={ handleUpdate }
				defaultPriority={ priority.split("-").join(" ") }
			/>
			<DeleteTodo title={ title } id={ id } />
		</div>
	)
}