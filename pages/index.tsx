import React from 'react';
import styled from 'styled-components';
import SlickContainerLayout from '../components/slick/slickShow';
import Page from '../layouts';
import { getMovieUpcoming } from '../services';

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;
  grid-template-areas:
    'slick slick slick'
    'popular popular top_rated'
    'upcoming upcoming top_rated';
`;

const SlickContainer = styled.div`
  height: 300px;
  grid-area: slick;
  background-color: red;
`;

const PopularContainer = styled.div`
  height: 500px;
  grid-area: popular;
  background-color: green;
`;

const TopRatedContainer = styled.div`
  grid-area: top_rated;
  background-color: blue;
`;

const UpcomingContainer = styled.div`
  grid-area: upcoming;
  background-color: coral;
`;

const Home = () => (
  <Page>
    <HomeContainer>
      <SlickContainer>
        <SlickContainerLayout></SlickContainerLayout>
      </SlickContainer>
      <PopularContainer>popular</PopularContainer>
      <TopRatedContainer>top_rated</TopRatedContainer>
      <UpcomingContainer>upcoming</UpcomingContainer>
    </HomeContainer>
  </Page>
);

Home.getInitialProps = async function() {
  const movieData = await getMovieUpcoming();
  return movieData;
};

export default Home;
