import { Movie } from 'interfaces'

interface ICard {
  item: Movie
  className?: string
  handlePressMovie: (id: number | string) => void
}

export const Card = ({ item, className, handlePressMovie }: ICard) => {
  const { poster_path, backdrop_path, id, title } = item ?? {}

  return (
    <div>
      <div
        className={`rounded-lg overflow-hidden shadow-md bg-white m-5 mb-2 ${className}`}
        onClick={() => handlePressMovie(id)}>
        <img
          className="w-full"
          alt={title}
          src={`https://image.tmdb.org/t/p/original${poster_path ?? backdrop_path}`}
        />
      </div>
      <div className="mx-6 font-bold text-m text-white">{title}</div>
    </div>
  )
}