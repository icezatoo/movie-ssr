export type MediaType = "all" | "movie" | "tv" | "person"

export interface MovieUpcoming {
  popularity: number
  vote_count: number
  video: boolean
  poster_path: string
  id: number
  adult: boolean
  backdrop_path: string
  original_language: string
  original_title: string
  genre_ids: number[]
  title: string
  vote_average: number
  overview: string
  release_date: string
}

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
  backdrop_path: string
  overview: string
  origin_country: string[]
  popularity: number
  media_type: string
}
