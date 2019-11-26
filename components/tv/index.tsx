import CardMovie from "components/cardMovie"
import { settings } from "constant/unity"
import React from "react"
import Slider from "react-slick"
import { MovieCard } from "services"
import styled from "styled-components"

interface ITvSectionProp {
  tvList: MovieCard[]
  title: string
}

const TitleMovie = styled.h2`
  display: inline-block;
  margin: 0 1em;
`
const BoxHeaderTitle = styled.div`
margin 2em 0;
`

const TvSection: React.FC<ITvSectionProp> = ({ tvList, title }) => {
  return (
    <div className="container">
      <BoxHeaderTitle>
        <TitleMovie>{title}</TitleMovie>
      </BoxHeaderTitle>
      <Slider {...settings}>
        {tvList.map((val, index) => (
          <CardMovie key={index} movie={val}></CardMovie>
        ))}
      </Slider>
    </div>
  )
}

export default TvSection
