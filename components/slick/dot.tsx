import React from 'react';
import styled from 'styled-components';

const DotLayout = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: white;
  margin: 0 10px;
  cursor: pointer;
`;

const Dot = ({ onClick, index }) => (
  <DotLayout onClick={() => onClick(index)}></DotLayout>
);

export default Dot;
