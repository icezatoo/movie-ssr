import { isEmpty } from "common"
import Loading from "components/loader"
import Movie from "components/movie"
import SlickSection from "components/Slick"
import Page from "layouts"
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

const TrendGridArea = styled.div`
  grid-area: trend;
  padding: 20px;
`

const TrendTvGridArea = styled.div`
  grid-area: trendTV;
  padding: 20px;
`

const MovieGridArea = styled.div`
  grid-area: movie;
  padding: 20px;
`

const TvPopularGridArea = styled.div`
  grid-area: tvpopular;
  padding: 20px;
`

const TvOnairGridArea = styled.div`
  grid-area: tvonair;
  padding: 20px;
`

const Home = ({ trendMovie, trendTV, popular, upcomings, tvOnAir, tvpopular }) => {
  return (
    <Page>
      <HomeContainer>
        <TrendGridArea>
          <SlickSection title="Trend Movie now" list={trendMovie}></SlickSection>
        </TrendGridArea>
        <TrendTvGridArea>
          <SlickSection title="Trend Tv now" list={trendTV}></SlickSection>
        </TrendTvGridArea>
        <MovieGridArea>
          <MovieSection popular={popular} upcomings={upcomings}></MovieSection>
        </MovieGridArea>
        <TvOnairGridArea>
          <SlickSection title="TV OnAir" list={tvOnAir}></SlickSection>
        </TvOnairGridArea>
        <TvPopularGridArea>
          <SlickSection title="TV popular" list={tvpopular}></SlickSection>
        </TvPopularGridArea>
      </HomeContainer>
    </Page>
  )
}

function MovieSection({ popular, upcomings }) {
  if (!isEmpty(popular) && !isEmpty(upcomings)) {
    return <Movie popular={popular} upcomings={upcomings}></Movie>
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
    poster_path: val.poster_path,
    original_name: val.original_title,
    vote_average: val.vote_average,
    date: val.release_date,
  }))
}

function mapMovieTV(data: IMovieTv[]): MovieCard[] {
  return data.map(val => ({
    poster_path: val.poster_path,
    original_name: val.original_name,
    vote_average: val.vote_average,
    date: val.first_air_date,
  }))
}

function mapMovietrend(data: IMovieTrending[]): MovieCard[] {
  return data.map(val => ({
    poster_path: val.poster_path,
    original_name: val.original_title ? val.original_title : val.original_name,
    vote_average: val.vote_average,
    date: val.first_air_date ? val.first_air_date : val.release_date,
  }))
}

export default Home
