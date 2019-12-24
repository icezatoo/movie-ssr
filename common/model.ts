export interface MenuList {
  label: string
  active: boolean
  path: string
}

export interface Dates {
  maximum: string
  minimum: string
}

export interface CommonAPI<T> {
  results: T[]
  page: number
  total_results: number
  dates: Dates
  total_pages: number
  id?: string
}

export interface ISlickModel {
  id: string | number
  path: string
  data: any
}

export interface ITabModel {
  label: string
  icon?: string
  key: string | number
}

export interface Genre {
  id: number
  name: string
}

export interface ProductionCompany {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export interface MovieVideos {
  id: string
  iso_639_1: string
  iso_3166_1: string
  key: string
  name: string
  site: string
  size: number
  type: string
}

export interface Cast {
  cast_id: number
  character: string
  credit_id: string
  gender: number
  id: number
  name: string
  order: number
  profile_path: string
  isHover?: boolean
}

export interface Crew {
  credit_id: string
  department: string
  gender: number
  id: number
  job: string
  name: string
  profile_path: string
  isHover?: boolean
}

export interface MovieCredits {
  id: number
  cast: Cast[]
  crew: Crew[]
}

export interface IDetailModel {
  backdropPath: string
  genres: Genre[]
  id: string
  originalLanguage: string
  name: string
  overview: string
  popularity: number
  posterPath: string
  productionCompanies: ProductionCompany[]
  homepage: string
  date: string
  runtime: number
  status: string
  voteAverage: number
  voteCount: number
  video: MovieVideos[]
  cast: Cast[]
  crew: Crew[]
}
