import React from 'react';
import styled from 'styled-components';
import SlickContainer from '../components/slick/slickShow';
import Page from '../layouts';
import { getMovieUpcoming } from '../services';

const HomeContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 450px 500px auto;
	grid-template-areas:
		'slick slick slick'
		'popular popular top_rated'
		'upcoming upcoming top_rated';
`;

const SlickGridArea = styled.div`
	grid-area: slick;
	background-color: red;
`;

const PopularContainer = styled.div`
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
			<SlickGridArea>
				<SlickContainer></SlickContainer>
			</SlickGridArea>
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
