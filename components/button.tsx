import React, { ReactNode } from "react"

import styled from "styled-components"

const ButtonMain = styled.button`
  background: ${props => props.background || "red"};
  color: ${props => props.color || "#fff"};
  border: none;
  text-align: center;
  padding: 0.4rem 1.3rem;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
  outline: none;
  border-radius: 2px;
  cursor: pointer;
  min-width: 64px;
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  font-size: 1rem;
  font-weight: 700;
  &:hover {
    opacity: 0.9;
  }
`

interface IButtonProp {
  children?: ReactNode
  color?: string
  background?: string
  height?: string
  width?: string
  onClick?: () => void
}

const Button: React.FC<IButtonProp> = ({ children, color, background, height, width, onClick }) => (
  <ButtonMain color={color} background={background} height={height} width={width} onClick={() => onClick()}>
    {children}
  </ButtonMain>
)

export default Button
