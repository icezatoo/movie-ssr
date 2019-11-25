import { settings } from "constant/unity"
import React from "react"
import Slider from "react-slick"
import { Movie } from "services"
import CardMovie from "./cardMovie"

type MovieSlickProps = { movieList: Movie[] }

const MovieSlick = ({ movieList }: MovieSlickProps) => (
  <Slider {...settings}>
    {movieList.map((val, index) => (
      <CardMovie key={index} movie={val}></CardMovie>
    ))}
  </Slider>
)

export default MovieSlick