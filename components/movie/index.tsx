import { ITabModel } from "common"
import Tabs from "components/tab"
import React, { useEffect, useState } from "react"
import { IMovie } from "services"
import styled from "styled-components"
import MovieSlick from "./movieSlick"

type MovieProps = { popular: IMovie[]; upcomings: IMovie[] }

const TitleMovie = styled.h2`
  display: inline-block;
  margin: 0 1em;
`

const BoxHeaderTitle = styled.div`
margin 2em 0;
`

const tabList: ITabModel[] = [
  { label: "Popular", icon: "far fa-star", key: 1 },
  { label: "Upcoming", icon: "far fa-clock", key: 2 },
]

const MovieSection = ({ popular, upcomings }: MovieProps) => {
  const [previousTab, setPreviousTab] = useState(0)
  const [movieList, setmovieList] = useState([])

  useEffect(() => {
    switch (previousTab) {
      case 0:
        setmovieList(popular)
        break
      case 1:
        setmovieList(upcomings)
        break
      default:
        setmovieList(popular)
        break
    }
  }, [previousTab])

  return (
    <>
      <div className="container">
        <BoxHeaderTitle>
          <TitleMovie>Movie</TitleMovie>
          <Tabs items={tabList} currentTab={previousTab} onChange={setPreviousTab}></Tabs>
        </BoxHeaderTitle>
        <MovieSlick movieList={movieList} />
      </div>
    </>
  )
}

export default MovieSection
