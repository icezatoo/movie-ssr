import axios from "axios"
import { CommonAPI } from "common"
import { apiEndPoint, apiKey, imageEndPoint } from "constant"
import { MediaType, IMovie, IMovieTrending, IMovieTv } from "./movie"

export const getMovieUpcoming = async (page = 1) => {
  return await axios
    .get<CommonAPI<IMovie>>(`${apiEndPoint}/movie/upcoming?api_key=${apiKey}&language=en-US&page=${page}`)
    .then(response => response.data)
}

export const getMoviePopular = async (page = 1) => {
  return await axios
    .get<CommonAPI<IMovie>>(`${apiEndPoint}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`)
    .then(response => response.data)
}

export const getMovieTvPopular = async (page = 1) => {
  return await axios
    .get<CommonAPI<IMovieTv>>(`${apiEndPoint}/tv/popular?api_key=${apiKey}&language=en-US&page=${page}`)
    .then(response => response.data)
}

export const getMovieTvOnAir = async (page = 1) => {
  return await axios
    .get<CommonAPI<IMovieTv>>(`${apiEndPoint}/tv/on_the_air?api_key=${apiKey}&language=en-US&page=${page}`)
    .then(response => response.data)
}

export const getTrending = async (mediaType: MediaType = "all", time: string = "day") => {
  return await axios
    .get<CommonAPI<IMovieTrending>>(`${apiEndPoint}/trending/${mediaType}/${time}?api_key=${apiKey}`)
    .then(response => response.data)
}
