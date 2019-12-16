import Detail from "components/detail"
import { imageEndPoint } from "constant"
import React from "react"
import { getMovieCredits, getMovieDetail, getMovieVideos } from "services"

const MovieDetail = movie => {
  return <Detail movieDetail={movie}></Detail>
}

MovieDetail.getInitialProps = async function({ query }) {
  const movie = await getMovieDetail(query.id)
  const videos = await getMovieVideos(query.id)
  const credits = await getMovieCredits(query.id)

  return {
    backdropPath: `${imageEndPoint}/original${movie.backdrop_path}`,
    id: movie.id,
    originalLanguage: movie.original_language,
    name: movie.original_title,
    overview: movie.overview,
    popularity: movie.popularity,
    posterPath: movie.poster_path,
    productionCompanies: movie.production_companies,
    date: movie.release_date,
    runtime: movie.runtime,
    status: movie.status,
    voteAverage: movie.vote_average,
    voteCount: movie.vote_count,
    genres: movie.genres,
    video: videos,
    homepage: movie.homepage,
    cast: credits.cast.filter((val, index) => val.profile_path),
    crew: credits.crew.filter((val, index) => val.profile_path),
  }
}

export default MovieDetail
