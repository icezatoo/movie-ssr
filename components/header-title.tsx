import React from "react"
import styled from "styled-components"

type HeaderTitleProps = { title: string }

const BoxTitle = styled.div`
  background: #071c23;
  height: 35px;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
`

const HeaderTitle = ({ title }: HeaderTitleProps) => (
  <BoxTitle>
    <h3>{title}</h3>
  </BoxTitle>
)

export default HeaderTitle
