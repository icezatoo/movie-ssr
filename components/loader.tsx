import React from "react"
import styled from "styled-components"

interface ILoading {
  width?: number
  height?: number
}

const Loader = styled.div`
  border: 5px solid #312c2c;
  border-radius: 50%;
  border-top: 5px solid #e5091d;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  left: 50%;
  position: absolute;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Loading: React.FC<ILoading> = ({ width = 50, height = 50 }) => {
  return <Loader width={width} height={height}></Loader>
}

export default Loading
