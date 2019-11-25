import { isEmpty } from "common"
import Banner from "components/banner"
import BannerAds from "components/banner/BannerAds"
import Loading from "components/loader"
import Movie from "components/movie"
import Page from "layouts"
import React from "react"
import { getCombineTrendingMovieAndTv, getMoviePopular, getMovieUpcoming, MovieCard, MovieModel } from "services"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import styled from "styled-components"

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 580px auto auto;
  grid-template-areas:
    "slick slick slick"
    "movie movie movie"
    "upcoming upcoming top_rated";
`

const SlickGridArea = styled.div`
  grid-area: slick;
`

const MovieContainer = styled.div`
  grid-area: movie;
  padding: 20px;
`

const Home = ({ responseTrend, popular, upcomings }) => {
  const renderMovie = () => {
    if (!isEmpty(popular) && !isEmpty(upcomings)) {
      return <Movie popular={popular} upcomings={upcomings}></Movie>
    }
    return <Loading />
  }

  return (
    <Page>
      <HomeContainer>
        <SlickGridArea>{responseTrend ? <Banner images={responseTrend}></Banner> : <BannerAds />}</SlickGridArea>
        <MovieContainer>{renderMovie()}</MovieContainer>
      </HomeContainer>
    </Page>
  )
}

Home.getInitialProps = async function() {
  const responseTrend = await getCombineTrendingMovieAndTv()
  const responsePopular = await getMoviePopular()
  const responseUpcoming = await getMovieUpcoming()
  return {
    responseTrend,
    popular: mapMovieData(responsePopular.results),
    upcomings: mapMovieData(responseUpcoming.results),
  }
}

const mapMovieData = (data: MovieModel[]): MovieCard[] => {
  return data.map(val => ({ ...val, original_name: val.original_title }))
}

export default Home
