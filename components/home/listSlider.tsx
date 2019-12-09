import { settings } from "constant/unity"
import React from "react"
import Slider from "react-slick"
import { MovieCard } from "services"
import CardMovie from "./cardMovie"

type ListSliderProps = { movieList: MovieCard[] }

const ListSlider = ({ movieList }: ListSliderProps) => (
  <Slider {...settings}>
    {movieList.map((val, index) => (
      <CardMovie key={index} movie={val}></CardMovie>
    ))}
  </Slider>
)

export default ListSlider
