import axios from "axios"
import { CommonAPI } from "common"
import { apiEndPoint, apiKey, imageEndPoint } from "constant"
import { MediaType, IMovie, MovieTrending, IMovieTv } from "./movie"

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
  return await axios.get<CommonAPI<MovieTrending>>(`${apiEndPoint}/trending/${mediaType}/${time}?api_key=${apiKey}`)
}

export const getCombineTrendingMovieAndTv = async () => {
  return Promise.all([getTrending("movie"), getTrending("tv")]).then(([movies, tv]) => {
    const movieList = movies.data.results
      .filter((_, index) => index < 5)
      .map(val => ({
        ...val,
        path: `${imageEndPoint}/original${val.backdrop_path}`,
        name: val.original_title,
      }))

    const tvList = tv.data.results
      .filter((_, index) => index < 5)
      .map(val => ({
        ...val,
        path: `${imageEndPoint}/original${val.backdrop_path}`,
        name: val.original_name,
      }))

    return [...movieList, ...tvList]
  })
}
