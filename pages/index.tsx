import { isEmpty } from "common"
import Banner from "components/banner"
import BannerAds from "components/banner/BannerAds"
import Loading from "components/loader"
import Movie from "components/movie"
import Page from "layouts"
import React from "react"
import {
  getCombineTrendingMovieAndTv,
  getMoviePopular,
  getMovieUpcoming,
  MovieCard,
  IMovie,
  IMovieTv,
  getMovieTvOnAir,
  getMovieTvPopular,
} from "services"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import styled from "styled-components"
import TvSection from "components/tv"

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 580px auto auto;
  grid-template-areas:
    "slick slick slick"
    "movie movie movie"
    "tvonair tvonair tvonair"
    "tvpopular tvpopular tvpopular";
`

const SlickGridArea = styled.div`
  grid-area: slick;
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

const Home = ({ responseTrend, popular, upcomings, tvOnAir, tvpopular }) => {
  return (
    <Page>
      <HomeContainer>
        <SlickGridArea>{responseTrend ? <Banner images={responseTrend}></Banner> : <BannerAds />}</SlickGridArea>
        <MovieGridArea>
          <MovieSection popular={popular} upcomings={upcomings}></MovieSection>
        </MovieGridArea>
        <TvOnairGridArea>
          <TvSection title="TV OnAir" tvList={tvOnAir}></TvSection>
        </TvOnairGridArea>
        <TvPopularGridArea>
          <TvSection title="TV popular" tvList={tvpopular}></TvSection>
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
  const responseTrend = await getCombineTrendingMovieAndTv()
  const responsePopular = await getMoviePopular()
  const responseUpcoming = await getMovieUpcoming()
  const responseTVOnAir = await getMovieTvOnAir()
  const responseTvPopular = await getMovieTvPopular()

  return {
    responseTrend,
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

export default Home
