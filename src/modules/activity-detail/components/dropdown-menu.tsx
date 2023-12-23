import { DropdownMenu as DM, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useSortStore } from "@/store/sort";
import { match } from "ts-pattern";

const Checked = () => (
	<DropdownMenuShortcut className="text-gray-600">
		<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
			<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
		</svg>
	</DropdownMenuShortcut>
)

export default function DropdownMenu() {
	const q = useSortStore(s => s.type)
	const setQ = useSortStore(s => s.change)

	return (
		<DM>
			<DropdownMenuTrigger asChild>
				<button className="me-2 outline-none" data-cy="todo-sort-button">
					<img src="/todo-sort-button.svg" alt="sort" />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="start" className="w-64 mt-2" data-cy="sort">
				<DropdownMenuGroup>
					<DropdownMenuItem 
						data-cy="sort-latest"
						className="py-3 px-4 cursor-pointer"
						onClick={() => setQ('terbaru')}
					>
						<img src="/-.svg" alt="" className="w-6" />
						<span className="text-base text-gray-600 ml-4">Terbaru</span>
						{match(q)
							.with('terbaru', () => <Checked />)
							.otherwise(() => null)}
					</DropdownMenuItem>
					<DropdownMenuItem 
						data-cy="sort-oldest"
						className="py-3 px-4 cursor-pointer"
						onClick={() => setQ('terlama')}
					>
						<img src="/-(1).svg" alt="" className="w-6" />
						<span className="text-base text-gray-600 ml-4">Terlama</span>
						{match(q)
							.with('terlama', () => <Checked />)
							.otherwise(() => null)}
					</DropdownMenuItem>
					<DropdownMenuItem 
						data-cy="sort-az"
						className="py-3 px-4 cursor-pointer"
						onClick={() => setQ('a-z')}
					>
						<img src="/-(2).svg" alt="" className="w-6" />
						<span className="text-base text-gray-600 ml-4">A-Z</span>
						{match(q)
							.with('a-z', () => <Checked />)
							.otherwise(() => null)}
					</DropdownMenuItem>
					<DropdownMenuItem 
						data-cy="sort-za"
						className="py-3 px-4 cursor-pointer"
						onClick={() => setQ('z-a')}
					>
						<img src="/-(3).svg" alt="" className="w-6" />
						<span className="text-base text-gray-600 ml-4">Z-A</span>
						{match(q)
							.with('z-a', () => <Checked />)
							.otherwise(() => null)}
					</DropdownMenuItem>
					<DropdownMenuItem 
						data-cy="sort-unfinished"
						className="py-3 px-4 cursor-pointer"
						onClick={() => setQ('belum-selesai')}
					>
						<img src="/-(4).svg" alt="" className="w-6" />
						<span className="text-base text-gray-600 ml-4">Belum Selesai</span>
						{match(q)
							.with('belum-selesai', () => <Checked />)
							.otherwise(() => null)}
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DM>
	)
}