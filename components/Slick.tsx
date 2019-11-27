import MovieSlick from "components/movieSlick"
import React from "react"
import { MovieCard } from "services"
import styled from "styled-components"

interface ISlickSectionProp {
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

const SlickSection: React.FC<ISlickSectionProp> = ({ list, title }) => {
  return (
    <div className="container">
      <BoxHeaderTitle>
        <TitleMovie>{title}</TitleMovie>
      </BoxHeaderTitle>
      <MovieSlick movieList={list}></MovieSlick>
    </div>
  )
}

export default SlickSection
