import { Settings } from 'react-slick'

export const settings: Settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1286,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
}
