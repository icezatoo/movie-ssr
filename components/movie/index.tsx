import { ITabModel } from "common"
import Tabs from "components/tab"
import React, { useEffect, useState } from "react"
import { Movie } from "services"
import styled from "styled-components"
import MovieSlick from "./movieSlick"

type MovieProps = { popular: Movie[]; upcomings: Movie[] }

const TabContainer = styled.div`
  margin: 30px auto;
  width: 60%;
`

const MovieMainContent = styled.div`
  width: 95%;
  margin: auto;
`

const tabList: ITabModel[] = [
  { label: "Popular", icon: "fas fa-film", key: 1 },
  { label: "Upcoming", icon: "fas fa-film", key: 2 },
]

const MovieContainer = ({ popular, upcomings }: MovieProps) => {
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
      <TabContainer>
        <Tabs items={tabList} currentTab={previousTab} onChange={setPreviousTab}></Tabs>
      </TabContainer>
      <MovieMainContent>
        <MovieSlick movieList={movieList} />
      </MovieMainContent>
    </>
  )
}

export default MovieContainer
