import { create } from 'zustand'

interface IMovieStore {
  currentMovieId: number | string
  isVisibleDetailSection: boolean
  isVisibleDetailModal: boolean
  setCurrentMovieId: (currentMovieId: number | string) => void
  setIsVisibleDetailSection: (isVisibleDetailSection: boolean) => void
  setIsVisibleDetailModal: (isVisibleDetailModal: boolean) => void
}

export const useMovieStore = create<IMovieStore>((set) => ({
  currentMovieId: '',
  isVisibleDetailSection: false,
  isVisibleDetailModal: false,
  setCurrentMovieId: (currentMovieId: number | string) => set(() => ({ currentMovieId })),
  setIsVisibleDetailSection: (isVisibleDetailSection: boolean) => set(() => ({ isVisibleDetailSection })),
  setIsVisibleDetailModal: (isVisibleDetailModal: boolean) => set(() => ({ isVisibleDetailModal })),
}))
