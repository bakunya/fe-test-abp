export default function ActivityHeader({ onCreateActivity }: { onCreateActivity: () => void }) {
	return (
		<>
			<div className="flex justify-between items-center">
				<h1 className="font-[800] text-3xl" data-cy="activity-title">Activity</h1>
				<button className="bg-[#16ABF8] flex items-center px-7 py-3 rounded-full" onClick={onCreateActivity} data-cy="activity-add-button">
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-plus" viewBox="0 0 16 16">
						<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
					</svg>
					<span className="text-white ml-1 text-lg">Tambah</span>
				</button>
			</div>
		</>
	)
}