import { Card } from 'components'
import { Movie } from 'interfaces'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { settings } from './constant'
import { useRef } from 'react'
import './styles.css'

interface IHorizontalCarousel {
  title: string
  data: Movie[] | undefined
  isLoading: boolean
  handlePressMovie: (id: number | string) => void
}

export const HorizontalCarousel = ({ data, title, handlePressMovie }: IHorizontalCarousel) => {
  const isDragging = useRef(false)

  const onPressMovie = (id: string | number) => {
    if (!isDragging.current) handlePressMovie(id)
  }

  return (
    <div className="w-full my-8 mx-auto">
      <div className="mx-6 font-bold text-2xl text-c-light-blue">{title}</div>
      <Slider
        {...settings}
        onSwipe={() => (isDragging.current = true)}
        afterChange={() => (isDragging.current = false)}>
        {data?.map((card) => <Card key={card.id} item={card} handlePressMovie={onPressMovie} />)}
      </Slider>
    </div>
  )
}
