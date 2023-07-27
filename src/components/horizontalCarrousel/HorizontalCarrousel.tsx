import { Card } from 'components/card/Card'
import { GetMoviesType, Movie } from 'interfaces'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { settings } from './constant'
import { useRef } from 'react'

interface IHorizontalCarrousel {
  title: string
  data: Movie[] | undefined
  isLoading: boolean
  type: GetMoviesType
  handlePressMovie: (id: number | string) => void
}

export const HorizontalCarrousel = ({ data, title, handlePressMovie }: IHorizontalCarrousel) => {
  const isDragging = useRef(false)

  const onPressMovie = (id: string | number) => {
    if (!isDragging.current) handlePressMovie(id)
  }

  return (
    <div className="w-full my-8 mx-auto">
      <div className="mx-6 font-bold text-2xl">{title}</div>
      <Slider
        {...settings}
        onSwipe={() => (isDragging.current = true)}
        afterChange={() => (isDragging.current = false)}>
        {data?.map((card) => <Card key={card.id} item={card} handlePressMovie={onPressMovie} />)}
      </Slider>
    </div>
  )
}
