import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function AlertSuccessDelete({ open, onClose }: { onClose: () => void; open: boolean }) {
	return (
		<Dialog open={ open }>
			<DialogContent data-cy="modal-information">
				<DialogHeader>
					<DialogTitle className="flex items-center justify-start">
						<img src="/modal-information-icon.svg" alt="info" data-cy="modal-information-icon" />
						<span className="block ml-3 font-[500] text-base" data-cy="modal-information-title">Activity Berhasil Dihapus</span>
						<DialogClose asChild>
							<button onClick={onClose} className="ml-auto">
								<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
									<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
								</svg>
							</button>
						</DialogClose>
					</DialogTitle>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}