export type MediaType = "all" | "movie" | "tv" | "person"

export interface MovieTrending {
  original_name: string
  id: number
  name: string
  vote_count: number
  vote_average: number
  first_air_date: string
  poster_path: string
  genre_ids: number[]
  original_language: string
  original_title: string
  backdrop_path: string
  overview: string
  origin_country: string[]
  popularity: number
  media_type: string
}

export interface IMovie {
  poster_path: string
  adult: boolean
  overview: string
  release_date: string
  genre_ids: number[]
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path: string
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}

export interface IMovieTv {
  poster_path: string
  popularity: number
  id: number
  backdrop_path: string
  vote_average: number
  overview: string
  first_air_date: string
  origin_country: string[]
  genre_ids: number[]
  original_language: string
  vote_count: number
  name: string
  original_name: string
}

export interface MovieCard {
  poster_path: string
  original_name: string
  vote_average: number
  date: string
}
