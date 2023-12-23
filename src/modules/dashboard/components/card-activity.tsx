import readableDate from "@/services/readable-date";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTrigger,
} from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog";

type TProps = {
	onDelete: (id: number) => void;
	onRedirect: (id: number) => void;
	item: {
		id: number;
		title: string;
		created_at: string;
	};
};

export default function CardActivity({ onDelete, onRedirect, item }: TProps) {
	const handleDelete = () => {
		onDelete(item.id);
	}

	return (
		<Dialog data-cy="modal-delete">
			<div className="text-start bg-white rounded-md shadow-[0_4px_8px_rgba(0,0,0,.15)] px-5 p-4" data-cy="activity-item">
				<h1 className="font-semibold text-lg cursor-pointer h-[200px]" onClick={ () => onRedirect(item.id) } data-cy="activity-item-title">{ item.title }</h1>
				<div className="flex justify-between items-center">
					<p className="text-md text-gray-500" data-cy="activity-item-date">{ readableDate(item.created_at) }</p>
					<DialogTrigger asChild>
						<button className="text-md text-gray-500" data-cy="activity-item-delete-button">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
								<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
							</svg>
						</button>
					</DialogTrigger>
				</div>
			</div>
			<DialogContent className="sm:max-w-[425px] md:max-w-[550px]" data-cy="modal-delete">
				<DialogHeader>
					<DialogDescription>
						<img src="/modal-delete-icon.svg" alt="icon" className="mx-auto block mt-4"  data-cy="modal-delete-icon" />
						<span className="flex items-center flex-col">
							<span className="text-black text-lg text-center my-8" data-cy="modal-delete-title">Apakah anda yakin menghapus activity <strong>"{ item.title }"?</strong></span>
						</span>
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<div className="flex justify-center flex-col md:flex-row mx-auto">
						<DialogClose asChild>
							<button className="bg-[#F4F4F4] flex items-center px-7 py-3 rounded-full me-3" data-cy="modal-delete-cancel-button">
								<span className="text-[#4A4A4A] ml-1 text-lg font-semibold">Batal</span>
							</button>
						</DialogClose>
						<DialogClose asChild>
							<button className="bg-[#ED4C5C] flex items-center px-7 py-3 rounded-full" onClick={ handleDelete } data-cy="modal-delete-confirm-button">
								<span className="text-white ml-1 text-lg font-semibold">Hapus</span>
							</button>
						</DialogClose>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}