import React from 'react';
import styled from 'styled-components';
import Dot from './dot';
import Slick from './slick';

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
  height: 300px;
  position: relative;
  display: flex;
`;

const SlickContainerLayout = () => {
  return (
    <>
      <MainSlickLayout>
        <Slick></Slick>
        <MainDotContainer>
          <Dot></Dot>
        </MainDotContainer>
      </MainSlickLayout>
    </>
  );
};

export default SlickContainerLayout;
