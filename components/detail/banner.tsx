import { IDetailModel, isEmpty, convertMinToHour, getGenres } from "common"
import Button from "components/button"
import React from "react"
import { Genre } from "services"
import styled from "styled-components"

const BannerMovie = styled.div`
  height: 40rem;
  background: red;
  position: relative;
  background-image: url('${props => props.url}');
  background-repeat: no-repeat;
  background-position: top center;
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
  showDialog: () => void
}

const Banner: React.FC<IBannerProp> = ({ movie, showDialog }) => {
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
          <TextRunTime>{convertMinToHour(movie.runtime)}</TextRunTime> |{" "}
          <TextGenres>{getGenres(movie.genres)}</TextGenres>
        </div>
        <BoxAction>
          <Button width="15em" height="3em" onClick={showDialog}>
            WATCH TRAILER
          </Button>
        </BoxAction>
      </BannerContent>
    </BannerMovie>
  )
}

export default Banner
