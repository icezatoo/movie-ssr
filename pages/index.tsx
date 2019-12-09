import { isEmpty } from "common"
import BoxMovie from "components/home/boxmovie"
import Movie from "components/home/movie"
import Loading from "components/loader"
import React from "react"
import {
  getMoviePopular,
  getMovieTvOnAir,
  getMovieTvPopular,
  getMovieUpcoming,
  getTrending,
  IMovie,
  IMovieTrending,
  IMovieTv,
  MovieCard,
} from "services"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import styled from "styled-components"

interface IHomeProp {
  trendMovie: MovieCard[]
  trendTV: MovieCard[]
  popular: MovieCard[]
  upcomings: MovieCard[]
  tvOnAir: MovieCard[]
  tvpopular: MovieCard[]
}

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "trend trend trend"
    "movie movie movie"
    "trendTV trendTV trendTV"
    "tvonair tvonair tvonair"
    "tvpopular tvpopular tvpopular";
`

const GridArea = styled.div`
  grid-area: ${props => props.area};
  padding: 20px;
`

const MovieGridArea = styled.div`
  grid-area: movie;
  padding: 20px;
`

const Home = (moviedata: IHomeProp) => {
  return (
    <>
      <HomeContainer>
        <MovieGridArea>
          <MovieSection popular={moviedata.popular} upcomings={moviedata.upcomings}></MovieSection>
        </MovieGridArea>
        <MovieSectionBox moviedata={moviedata}></MovieSectionBox>
      </HomeContainer>
    </>
  )
}

function MovieSection({ popular, upcomings }) {
  if (!isEmpty(popular) && !isEmpty(upcomings)) {
    return <Movie popular={popular} upcomings={upcomings}></Movie>
  }
  return <Loading />
}

const MovieSectionBox = ({ moviedata }): any => {
  const sectionBox = [
    { grid: "trend", title: "Trend Movie now", data: moviedata.trendMovie },
    { grid: "trendTV", title: "Trend TV now", data: moviedata.trendTV },
    { grid: "tvonair", title: "TV OnAir", data: moviedata.tvOnAir },
    { grid: "tvpopular", title: "TV popular", data: moviedata.tvpopular },
  ]

  if (!isEmpty(moviedata)) {
    return sectionBox.map((val, index) => (
      <GridArea area={val.grid} key={index}>
        <BoxMovie title={val.title} list={val.data}></BoxMovie>
      </GridArea>
    ))
  }
  return <Loading />
}

Home.getInitialProps = async function() {
  const responseTrendMovie = await getTrending("movie")
  const responseTrendTV = await getTrending("tv")
  const responsePopular = await getMoviePopular()
  const responseUpcoming = await getMovieUpcoming()
  const responseTVOnAir = await getMovieTvOnAir()
  const responseTvPopular = await getMovieTvPopular()

  return {
    trendMovie: mapMovietrend(responseTrendMovie.results),
    trendTV: mapMovietrend(responseTrendTV.results),
    popular: mapMovieData(responsePopular.results),
    upcomings: mapMovieData(responseUpcoming.results),
    tvOnAir: mapMovieTV(responseTVOnAir.results),
    tvpopular: mapMovieTV(responseTvPopular.results),
  }
}

function mapMovieData(data: IMovie[]): MovieCard[] {
  return data.map(val => ({
    id: val.id,
    poster_path: val.poster_path,
    original_name: val.original_title,
    vote_average: val.vote_average,
    date: val.release_date,
    mode: "Movie",
  }))
}

function mapMovieTV(data: IMovieTv[]): MovieCard[] {
  return data.map(val => ({
    id: val.id,
    poster_path: val.poster_path,
    original_name: val.original_name,
    vote_average: val.vote_average,
    date: val.first_air_date,
    mode: "TV",
  }))
}

function mapMovietrend(data: IMovieTrending[]): MovieCard[] {
  return data.map(val => ({
    id: val.id,
    poster_path: val.poster_path,
    original_name: val.original_title ? val.original_title : val.original_name,
    vote_average: val.vote_average,
    date: val.first_air_date ? val.first_air_date : val.release_date,
    mode: val.media_type === "movie" ? "Movie" : "TV",
  }))
}

export default Home
