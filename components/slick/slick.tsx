import React from 'react';
import styled from 'styled-components';

const MainImageContainerSlick = styled.div`
  width: 100%;
  left: ${props => props.offScreen}vw;
`;

const Slick = ({ offScreen = 0, path }) => (
  <>
    <MainImageContainerSlick offScreen={offScreen}>
      <img src={path} />
    </MainImageContainerSlick>
    <style jsx>
      {`
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}
    </style>
  </>
);

export default Slick;
