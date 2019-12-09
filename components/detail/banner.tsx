import { IDetailModel, isEmpty } from "common"
import React, { useState } from "react"
import { Genre } from "services"
import styled from "styled-components"
import Button from "components/button"
import Model from "components/modal"
import Video from "components/Video"

const BannerMovie = styled.div`
  height: 45rem;
  background: red;
  position: relative;
  background-image: url('${props => props.url}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  will-change: opacity;
  transition: filter 1s;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0,0,0,0.6);
  }

`

const BannerContent = styled.div`
  top: 30%;
  left: 20%;
  margin: auto;
  display: flex;
  position: absolute;
  flex-direction: column;
  z-index: 2;
`

const Title = styled.h1`
  font-weight: 700;
  line-height: 1.1;
  font-size: 2.2rem;
`

const Text = styled.span`
  margin: 0 20px;
`
const TextRunTime = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  margin-right: 1rem;
`

const TextGenres = styled.span`
  color: #9e9e9e;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.5;
  margin: 0 10px;
`

const BoxAction = styled.div`
  margin: 3em 0;
`

interface IBannerProp {
  movie: IDetailModel
}

const Banner: React.FC<IBannerProp> = ({ movie }) => {
  const [isShow, setShowDialog] = useState(false)

  const showDialog = () => {
    setShowDialog(true)
  }

  const closeDialog = () => {
    setShowDialog(false)
  }

  return (
    <BannerMovie url={movie.backdropPath}>
      <BannerContent>
        <div>
          <span>{movie.date}</span>
          <Text>
            <i className="fas fa-star"></i> {movie.voteAverage}/10
          </Text>
        </div>
        <Title>{movie.name}</Title>
        <div>
          <TextRunTime>{movie.runtime}min</TextRunTime> | <TextGenres>{getGenres(movie.genres)}</TextGenres>
        </div>
        <BoxAction>
          <Button width="15em" height="3em" onClick={showDialog}>
            WATCH TRAILER
          </Button>
        </BoxAction>
      </BannerContent>
      <Model show={isShow} close={closeDialog} title="Play Trailer">
        {isShow && <Video id={movie.video[0].key}></Video>}
      </Model>
    </BannerMovie>
  )
}

function getGenres(genres: Genre[]) {
  if (!isEmpty(genres)) {
    return genres.map(val => val.name).join(", ")
  }
  return "General"
}

export default Banner
