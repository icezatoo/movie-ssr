import axios from "axios"
import { CommonAPI, MovieVideos, MovieCredits } from "common"
import { apiEndPoint, apiKey } from "constant"
import { IMovie, IMovieDetail, IMovieTrending, IMovieTv, MediaType } from "./movie"

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

export const getMovieDetail = async (id: number) => {
  return await axios
    .get<IMovieDetail>(`${apiEndPoint}/movie/${id}?api_key=${apiKey}&language=en-US`)
    .then(response => response.data)
}

export const getMovieVideos = async (id: number) => {
  return await axios
    .get<CommonAPI<MovieVideos>>(`${apiEndPoint}/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
    .then(response => response.data.results)
}

export const getMovieCredits = async (id: number) => {
  return await axios
    .get<MovieCredits>(`${apiEndPoint}/movie/${id}/credits?api_key=${apiKey}&language=en-US`)
    .then(response => response.data)
}
