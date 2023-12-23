import { DropdownMenu as DM, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import clsx from "clsx";
import { match } from "ts-pattern";


const Checked = () => (
	<DropdownMenuShortcut className="text-gray-600">
		<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
			<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
		</svg>
	</DropdownMenuShortcut>
)

export default function PrioritySelection({ setQ, q }: { q: { q: string }, setQ: (q: { q: string }) => void }) {
	return (

		<DM>
			<DropdownMenuTrigger asChild>
				<button className="flex items-center border capitalize me-2 outline-none p-4 w-52 mt-2" data-cy="modal-add-priority-dropdown">
					<span
						className={
							clsx(
								"p-[6px] mr-3 rounded-full",
								match(q.q)
									.with('very high', () => 'bg-[#ed4c5c]')
									.with('high', () => 'bg-[#f8a541]')
									.with('medium', () => 'bg-[#00a790]')
									.with('low', () => 'bg-[#428bc1]')
									.with('very low', () => 'bg-[#8942c1]')
									.otherwise(() => 'bg-[#92D050]')
							)
						}
					/>
					<span className="text-base text-black">{ q.q }</span>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-auto bi bi-chevron-down" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
					</svg>
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="start" className="w-64 mt-2">
				<DropdownMenuGroup>
					<DropdownMenuItem
						className="py-3 px-4 cursor-pointer"
						data-cy="modal-add-priority-very-high"
						onClick={ () => setQ({ q: 'very high' }) }
					>
						<span className="bg-[#ed4c5c] p-[6px] mr-3 rounded-full" />
						<span className="text-base text-gray-600 ml-4">Very High</span>
						{match(q.q)
							.with('very high', () => <Checked />)
							.otherwise(() => null)}
					</DropdownMenuItem>
					<DropdownMenuItem
						className="py-3 px-4 cursor-pointer"
						data-cy="modal-add-priority-high"
						onClick={ () => setQ({ q: 'high' }) }
					>
						<span className="bg-[#f8a541] p-[6px] mr-3 rounded-full" />
						<span className="text-base text-gray-600 ml-4">High</span>
						{match(q.q)
							.with('high', () => <Checked />)
							.otherwise(() => null)}
					</DropdownMenuItem>
					<DropdownMenuItem
						className="py-3 px-4 cursor-pointer"
						data-cy="modal-add-priority-medium"
						onClick={ () => setQ({ q: 'medium' }) }
					>
						<span className="bg-[#00a790] p-[6px] mr-3 rounded-full" />
						<span className="text-base text-gray-600 ml-4">Medium</span>
						{match(q.q)
							.with('medium', () => <Checked />)
							.otherwise(() => null)}
					</DropdownMenuItem>
					<DropdownMenuItem
						className="py-3 px-4 cursor-pointer"
						data-cy="modal-add-priority-low"
						onClick={ () => setQ({ q: 'low' }) }
					>
						<span className="bg-[#428bc1] p-[6px] mr-3 rounded-full" />
						<span className="text-base text-gray-600 ml-4">Low</span>
						{match(q.q)
							.with('low', () => <Checked />)
							.otherwise(() => null)}
					</DropdownMenuItem>
					<DropdownMenuItem
						className="py-3 px-4 cursor-pointer"
						data-cy="modal-add-priority-very-low"
						onClick={ () => setQ({ q: 'very low' }) }
					>
						<span className="bg-[#8942c1] p-[6px] mr-3 rounded-full" />
						<span className="text-base text-gray-600 ml-4">Very Low</span>
						{match(q.q)
							.with('very low', () => <Checked />)
							.otherwise(() => null)}
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DM>
	)
}