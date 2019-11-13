import axios from "axios"
import { CommonAPI } from "common"
import { apiEndPoint, apiKey } from "constant"
import { MovieUpcoming } from "./movie"

export const getMovieUpcoming = async (page = 1) => {
  const res = await axios.get<CommonAPI<MovieUpcoming>>(
    `${apiEndPoint}/movie/upcoming?api_key=${apiKey}&language=en-US&page=${page}`
  )
  return await res.data
}
