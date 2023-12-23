import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import PrioritySelection from "./priority-selection";
import { useState } from "react";
import clsx from "clsx";
import { useParams } from "react-router-dom";

export default function TodoAction({ ButtonAction, onAction, defaultName, defaultPriority, title }: { title: string; defaultName?: string; defaultPriority?: string; onAction: (q: Record<string, string | number>) => void; ButtonAction: JSX.Element }) {
	const { id } = useParams()
	const [p, sp] = useState(defaultPriority ?? 'very high')
	const [name, setName] = useState(defaultName ?? "")

	const handleSave = () => {
		if (!Boolean(name)) return
		setName('')
		sp('very high')
		onAction({
			title: name,
			priority: p.split(" ").join("-"),
			activity_group_id: id as unknown as number,
		})
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				{ ButtonAction }
			</DialogTrigger>

			<DialogContent className="md:max-w-[800px] px-0" data-cy="modal-add">
				<DialogHeader className="px-5 pb-1">
					<DialogTitle className="flex justify-between items-center">
						<span className="text-black text-lg font-semibold" data-cy="modal-add-title">{ title }</span>
						<DialogClose asChild>
							<button className="ml-auto text-gray-600" data-cy="modal-add-close-button">
								<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
									<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
								</svg>
							</button>
						</DialogClose>
					</DialogTitle>
				</DialogHeader>
				<hr />
				<DialogDescription className="px-5 py-4">
					<label htmlFor="act" className="text-xs font-semibold text-black" data-cy="modal-add-name-title">NAMA LIST ITEM</label>
					<input type="text" value={ name } onChange={ e => setName(e.target.value) } data-cy="modal-add-name-input" placeholder="Tambahkan nama Activity" id="act" className="text-black  mt-2 rounded focus:border-black w-full outline-none border p-4 text-base" />
					<label className="text-xs font-semibold text-black mt-9 block" data-cy="modal-add-priority-title">PRIORITY</label>
					<PrioritySelection setQ={ (c) => sp(c.q) } q={ { q: p } } />
				</DialogDescription>
				<hr />
				<DialogFooter className="px-5 pt-1">
					<DialogClose asChild disabled={ !Boolean(name) }>
						<button onClick={ handleSave } data-cy="modal-add-save-button" className={ clsx((!Boolean(name) ? "bg-[#67c8fa]" : "bg-[#16abf8]"), "flex items-center px-7 py-3 rounded-full") }>
							<span className="text-white ml-1 text-lg font-semibold">Simpan</span>
						</button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}