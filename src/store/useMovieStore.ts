import { Movie } from 'interfaces'
import { create } from 'zustand'

interface IMovieStore {
  current: Movie
  isVisibleDetailSection: boolean
  isVisibleDetailModal: boolean
  setCurrentMovie: (current: Movie | undefined) => void
  setIsVisibleDetailSection: (isVisibleDetailSection: boolean) => void
  setIsVisibleDetailModal: (isVisibleDetailModal: boolean) => void
}

export const useMovieStore = create<IMovieStore>((set) => ({
  current: { id: '', title: '' },
  isVisibleDetailSection: false,
  isVisibleDetailModal: false,
  setCurrentMovie: (current: Movie | undefined) => set(() => ({ current })),
  setIsVisibleDetailSection: (isVisibleDetailSection: boolean) => set(() => ({ isVisibleDetailSection })),
  setIsVisibleDetailModal: (isVisibleDetailModal: boolean) => set(() => ({ isVisibleDetailModal })),
}))
