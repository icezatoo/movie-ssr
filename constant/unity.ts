import { MenuList } from "common/model"

export const menuList: MenuList[] = [
  { label: "Movie", active: false, path: "movie" },
  { label: "TV shows", active: false, path: "tv" },
]

export const apiEndPoint: string = "https://api.themoviedb.org/3"
export const apiKey: string = "545355355a5f3d21e30cf2751d3ac464"

export const imageEndPoint: string = "https://image.tmdb.org/t/p"

export const BASE_EMBED_URL = "https://www.youtube.com/embed/"

export const settings = {
  dots: false,
  infinite: true,
  lazyLoad: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 2,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
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
