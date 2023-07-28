import { Movie } from 'interfaces'
import { create } from 'zustand'

interface IMovieStore {
  current: Movie
  isLoadingCurrentMovie: boolean
  isVisibleDetailSection: boolean
  isVisibleDetailModal: boolean
  setCurrentMovie: (current: Movie | undefined) => void
  setIsLoadingCurrentMovie: (isLoadingCurrentMovie: boolean) => void
  setIsVisibleDetailSection: (isVisibleDetailSection: boolean) => void
  setIsVisibleDetailModal: (isVisibleDetailModal: boolean) => void
}

export const useMovieStore = create<IMovieStore>((set) => ({
  current: { id: '', title: '' },
  isLoadingCurrentMovie: false,
  isVisibleDetailSection: false,
  isVisibleDetailModal: false,
  setCurrentMovie: (current: Movie | undefined) => set(() => ({ current })),
  setIsLoadingCurrentMovie: (isLoadingCurrentMovie: boolean) => set(() => ({ isLoadingCurrentMovie })),
  setIsVisibleDetailSection: (isVisibleDetailSection: boolean) => set(() => ({ isVisibleDetailSection })),
  setIsVisibleDetailModal: (isVisibleDetailModal: boolean) => set(() => ({ isVisibleDetailModal })),
}))
