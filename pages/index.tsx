import React from "react"
import styled from "styled-components"
import { getCombineTrendingMovieAndTv } from "services"
import Slick from "components/slick"
import BannerAds from "components/slick/BannerAds"
import HeaderTitle from "components/header-title"
import Page from "layouts"

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 580px 500px auto;
  grid-row-gap: 15px;
  grid-column-gap: 10px;
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

const Home = ({ responseTrend }) => {
  return (
    <Page>
      <HomeContainer>
        <SlickGridArea>{responseTrend ? <Slick images={responseTrend}></Slick> : <BannerAds />}</SlickGridArea>
        <PopularContainer>
          <HeaderTitle title="Popular" />
        </PopularContainer>
        <TopRatedContainer>
          <HeaderTitle title="TopRated" />
        </TopRatedContainer>
        <UpcomingContainer>
          <HeaderTitle title="Upcoming" />
        </UpcomingContainer>
      </HomeContainer>
    </Page>
  )
}

Home.getInitialProps = async function() {
  const responseTrend = await getCombineTrendingMovieAndTv()
  return { responseTrend }
}

export default Home
