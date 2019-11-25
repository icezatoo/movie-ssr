import { MenuList } from "common/model"

export const menuList: MenuList[] = [
  { label: "Movie", active: false, path: "movie" },
  { label: "TV shows", active: false, path: "tv" },
]

export const apiEndPoint: string = "https://api.themoviedb.org/3"
export const apiKey: string = "545355355a5f3d21e30cf2751d3ac464"

export const imageEndPoint: string = "https://image.tmdb.org/t/p"

export const settings = {
  dots: false,
  infinite: true,
  lazyLoad: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}
