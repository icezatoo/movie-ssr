import React, { ReactNode } from "react"
import styled from "styled-components"

const Link = styled.a`
  border: 2px solid #fff;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  padding-right: 2px;
  margin: 0 1em;
  cursor: pointer;
`

const ContentLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${props => props.color};
`

interface IButtonIconProp {
  children?: ReactNode
  color?: string
  height?: string
  width?: string
  onClick?: () => void
}

const ButtonIcon: React.FC<IButtonIconProp> = ({ width = 45, height = 45, color = "white", children, onClick }) => {
  return (
    <Link onClick={onClick} width={width} height={height}>
      <ContentLink color={color}>{children}</ContentLink>
    </Link>
  )
}

export default ButtonIcon
