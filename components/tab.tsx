import React from "react"
import styled from "styled-components"
import { ITabModel } from "common"

const Tab = styled.div.attrs({
  role: "tab",
  tabIndex: 0,
})`
  display: inline-block;
  cursor: pointer;
  padding: 1em;
  width: 25rem;
  text-align: center;
  &:focus {
    outline: none;
  }
  font-size: 1em;
  font-weight: ${props => (props.active ? "bold" : "400")};
  border-bottom: ${props => (props.active ? "1px solid" : "none")};
  color: #e5e5e5;
`

const Text = styled.span`
  margin: 0 10px;
`

interface ITabs {
  items: ITabModel[]
  currentTab: number
  onChange: (tabIndex: number) => void
}

const Tabs: React.FC<ITabs> = ({ items, currentTab, onChange }) => {
  return (
    <>
      {items.map((item, tabIndex) => (
        <Tab key={tabIndex} active={tabIndex === currentTab} onClick={() => onChange(tabIndex)}>
          {item.icon && <i className={item.icon}></i>}
          <Text>{item.label}</Text>
        </Tab>
      ))}
    </>
  )
}

export default Tabs
