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
