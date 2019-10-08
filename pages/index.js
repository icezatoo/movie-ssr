import React from 'react';
import styled from 'styled-components';
import Page from '../layouts/main';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Home = () => (
  <Page>
    <Title>Test</Title>
  </Page>
);

export default Home;
