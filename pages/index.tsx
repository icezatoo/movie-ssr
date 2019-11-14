import React from "react"
import styled from "styled-components"
import useFetcher from "custom/useFetch"
import { getCombineTrendingMovieAndTv } from "services"
import Slick from "components/slick"
import BannerAds from "components/slick/BannerAds"
import Page from "layouts"

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 500px 500px auto;
  grid-template-areas:
    "slick slick slick"
    "popular popular top_rated"
    "upcoming upcoming top_rated";
`

const SlickGridArea = styled.div`
  grid-area: slick;
`

const PopularContainer = styled.div`
  grid-area: popular;
  background-color: green;
`

const TopRatedContainer = styled.div`
  grid-area: top_rated;
  background-color: blue;
`

const UpcomingContainer = styled.div`
  grid-area: upcoming;
  background-color: coral;
`

const Home = () => {
  const { response, error } = useFetcher(getCombineTrendingMovieAndTv)

  return (
    <Page>
      <HomeContainer>
        <SlickGridArea>{response ? <Slick images={response}></Slick> : <BannerAds />}</SlickGridArea>
        <PopularContainer>popular</PopularContainer>
        <TopRatedContainer>top_rated</TopRatedContainer>
        <UpcomingContainer>upcoming</UpcomingContainer>
      </HomeContainer>
    </Page>
  )
}

export default Home
