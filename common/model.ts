import { ProductionCompany, Genre, MovieVideos, Cast, Crew } from "services"

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
