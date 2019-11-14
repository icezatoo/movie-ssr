import axios from "axios"
import { CommonAPI } from "common"
import { apiEndPoint, apiKey } from "constant"
import { MovieUpcoming, MediaType, MovieTrending } from "./movie"

export const getMovieUpcoming = async (page = 1) => {
  return await axios.get<CommonAPI<MovieUpcoming>>(
    `${apiEndPoint}/movie/upcoming?api_key=${apiKey}&language=en-US&page=${page}`
  )
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
        path: `https://image.tmdb.org/t/p/original${val.backdrop_path}`,
      }))
    const tvList = tv.data.results
      .filter((_, index) => index < 5)
      .map(val => ({
        ...val,
        path: `https://image.tmdb.org/t/p/original${val.backdrop_path}`,
      }))

    return [...movieList, ...tvList]
  })
}
