import axios from "axios"
import { CommonAPI, MovieVideos, MovieCredits } from "common"
import { apiEndPoint, apiKey } from "constant"
import { IMovieDetailTV } from "./tv"

export const getTVDetail = async (id: string) => {
  return await axios
    .get<IMovieDetailTV>(`${apiEndPoint}/tv/${id}?api_key=${apiKey}&language=en-US`)
    .then(response => response.data)
}

export const getTVvideo = async (id: string) => {
  return await axios
    .get<CommonAPI<MovieVideos>>(`${apiEndPoint}/tv/${id}/videos?api_key=${apiKey}&language=en-US`)
    .then(response => response.data.results)
}

export const getTVcredits = async (id: string) => {
  return await axios
    .get<MovieCredits>(`${apiEndPoint}/tv/${id}/credits?api_key=${apiKey}&language=en-US`)
    .then(response => response.data)
}
