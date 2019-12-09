import ListSlider from "components/home/listSlider"
import React from "react"
import { MovieCard } from "services"
import styled from "styled-components"

interface IMovieProp {
  list: MovieCard[]
  title: string
}

const TitleMovie = styled.h2`
  display: inline-block;
  margin: 0 1em;
`
const BoxHeaderTitle = styled.div`
margin 2em 0;
`

const BoxMovie: React.FC<IMovieProp> = ({ list, title }) => {
  return (
    <div className="container">
      <BoxHeaderTitle>
        <TitleMovie>{title}</TitleMovie>
      </BoxHeaderTitle>
      <ListSlider movieList={list}></ListSlider>
    </div>
  )
}

export default BoxMovie
