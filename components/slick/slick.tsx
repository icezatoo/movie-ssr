import React from 'react';
import styled from 'styled-components';

const MainImageContainerSlick = styled.div`
  width: 100%;
  position: absolute;
`;

const Slick = () => (
  <>
    <MainImageContainerSlick>
      <img
        className="image"
        height="300"
        src="https://picsum.photos/id/1018/1500/300/"
      />
    </MainImageContainerSlick>
    <style jsx>
      {`
        .image {
          width: 100%;
          object-fit: cover;
        }
      `}
    </style>
  </>
);

export default Slick;
