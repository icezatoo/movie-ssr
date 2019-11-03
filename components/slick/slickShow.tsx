import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Dot from './dot';
import Slick from './slick';
import { ISlickModel } from '../../common';

const MainDotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 50px;
`;

const MainSlickLayout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
`;

const image: ISlickModel[] = [
  {
    path:
      'https://c.wallhere.com/photos/47/66/Star_Wars_The_Last_Jedi_movies_poster_movie_poster-1201860.jpg!d',
    data: 'test'
  },
  {
    path: 'https://images5.alphacoders.com/881/thumb-1920-881633.jpg',
    data: 'test'
  },
  {
    path: 'https://images7.alphacoders.com/882/thumb-1920-882297.jpg',
    data: 'test'
  }
];

const SlickContainerLayout = () => {
  const [activeImage, setActiveImage] = useState(0);

  const renderDot = () => {
    return image.map((val, index) => (
      <Dot
        key={index}
        index={index}
        onClick={index => setActiveImage(index)}
      ></Dot>
    ));
  };

  return (
    <>
      <MainSlickLayout>
        <Slick path={image[activeImage].path}></Slick>
        <MainDotContainer>{renderDot()}</MainDotContainer>
      </MainSlickLayout>
    </>
  );
};

export default SlickContainerLayout;
