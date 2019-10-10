import React from 'react';
import styled from 'styled-components';
import Page from '../layouts/main';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

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
  height: 200px;
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
      <SlickContainer>Slick</SlickContainer>
      <PopularContainer>popular</PopularContainer>
      <TopRatedContainer>top_rated</TopRatedContainer>
      <UpcomingContainer>upcoming</UpcomingContainer>
    </HomeContainer>
  </Page>
);

export default Home;
