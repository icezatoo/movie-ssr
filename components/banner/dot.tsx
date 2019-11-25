import React from "react"
import styled from "styled-components"

const DotLayout = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: ${props => (props.activeImage ? "white" : "black")};
  margin: 0 10px;
`

const Dot = ({ activeImage }) => <DotLayout activeImage={activeImage}></DotLayout>

export default Dot
