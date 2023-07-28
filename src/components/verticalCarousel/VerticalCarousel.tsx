import { Card } from 'components'
import { Movie } from 'interfaces'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface IVerticalCarousel {
  data: Movie[] | undefined
  isLoading: boolean
  handlePressMovie: (id: number | string) => void
}

export const VerticalCarousel = ({ data, handlePressMovie }: IVerticalCarousel) => (
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 max-h-screen overflow-y-scroll pb-8">
    {data?.map((card) => <Card key={card.id} item={card} handlePressMovie={handlePressMovie} />)}
  </div>
)
