import { usePutActivity } from "@/adapters/activity/hook"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { match } from "ts-pattern"
import DropdownMenu from "./dropdown-menu"
import TodoAction from "./todo-action"
import { usePostTodo } from "@/adapters/todo/hook"

export default function ActivityDetailHeader({ name, id }: { id: number, name: string }) {
	const [n, sn] = useState(name)
	const navigate = useNavigate()
	const mutate = usePutActivity()
	const mutateTodo = usePostTodo()
	const x = useRef<HTMLInputElement>(null)
	const [state, setState] = useState(false)

	const setTrue = () => {
		setState(true);
		setTimeout(() => {
			(x.current as HTMLInputElement)?.focus()
		}, 10);
	}

	const setFalse = () => {
		setState(false)
		mutate.mutate({ title: n, id })
	}

	const handleCreate = (q: Record<string, string | number>) => {
		mutateTodo.mutate(q as {
			activity_group_id: number;
			title: string;
			priority: string;
		})
	}


	return (
		<>
			<div className="flex justify-between items-center flex-wrap">
				<div className="flex items-center grow">
					<button onClick={ () => navigate("/") } data-cy="todo-back-button">
						<img src="/todo-back-button.svg" alt="backbutton" />
					</button>
					{
						match(state)
							.with(false, () => (
								<h1 data-cy="todo-title" className="font-[800] text-3xl ms-3 me-5" onClick={ setTrue }>{ n }</h1>
							))
							.with(true, () => (
								<input
									ref={ x }
									type="text"
									value={ n }
									onChange={ (e) => sn(e.currentTarget.value) }
									onBlur={ setFalse }
									className="font-[800] text-3xl ms-3 me-5 outline-none border-x-0 border-t-0 border-gray-900 border-b border"
								/>
							))
							.otherwise(() => null)
					}
					<button onClick={ setTrue } data-cy="todo-title-edit-button">
						<img src="/todo-title-edit-button.svg" alt="edit" />
					</button>
				</div>
				<div className="flex items-center">
					<DropdownMenu />
					<TodoAction
						ButtonAction={ (
							<button className="bg-[#16ABF8] flex items-center px-7 py-3 rounded-full" data-cy="todo-add-button">
								<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-plus" viewBox="0 0 16 16">
									<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
								</svg>
								<span className="text-white ml-1 text-lg">Tambah</span>
							</button>
						) }
						title="Tambah List Item"
						onAction={ handleCreate }
					/>
				</div>
			</div>
		</>
	)
}