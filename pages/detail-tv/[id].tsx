import { MovieCredits, MovieVideos } from "common"
import Detail from "components/detail"
import { imageEndPoint } from "constant"
import React from "react"
import { getTVcredits, getTVDetail, getTVvideo, IMovieDetailTV } from "services"

const TVDetail = movie => {
  return <Detail movieDetail={movie}></Detail>
}

TVDetail.getInitialProps = async function({ query }) {
  const [movie, videos, credits] = await Promise.all<IMovieDetailTV, MovieVideos[], MovieCredits>([
    getTVDetail(query.id),
    getTVvideo(query.id),
    getTVcredits(query.id),
  ])

  return {
    backdropPath: `${imageEndPoint}/original${movie.backdrop_path}`,
    id: movie.id,
    originalLanguage: movie.original_language,
    name: movie.original_name,
    overview: movie.overview,
    popularity: movie.popularity,
    posterPath: movie.poster_path,
    productionCompanies: movie.production_companies,
    date: movie.first_air_date,
    runtime: [],
    status: movie.status,
    voteAverage: movie.vote_average,
    voteCount: movie.vote_count,
    genres: movie.genres,
    video: videos,
    homepage: movie.homepage,
    cast: credits.cast.filter((val, index) => val.profile_path && index < 6).map(val => ({ ...val, isHover: false })),
    crew: credits.crew.filter((val, index) => val.profile_path && index < 6),
  }
}

export default TVDetail
