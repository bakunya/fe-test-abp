import { create } from 'zustand'

interface SortState {
	type: string
	change: (type: string) => void
}

export const useSortStore = create<SortState>((set) => ({
	type: 'terbaru',
	change: (type: string) => set(() => ({ type })),
}))