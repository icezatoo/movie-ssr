import { IDetailModel, isEmpty } from "common"
import Button from "components/button"
import ImagePoster from "components/imagePoster"
import React from "react"
import { Genre } from "services"
import styled from "styled-components"

const BannerMovie = styled.div`
  height: 35rem;
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
    background: rgba(0,0,0,0.7);
  }

`

const BannerMovieContent = styled.div`
  margin: auto;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 1em;
  padding: 3em;
`

const ContentDetail = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-weight: 700;
  line-height: 1.1;
  font-size: 2.2rem;
`

const TextOpacity = styled.span`
  opacity: 0.6;
  font-weight: 400;
`

interface IBannerProp {
  movie: IDetailModel
  showDialog: (movieID: string) => void
}

const Banner: React.FC<IBannerProp> = ({ movie, showDialog }) => {
  return (
    <BannerMovie url={movie.backdropPath}>
      <BannerMovieContent>
        <div className="container">
          <ContentGrid>
            <div>
              <ImagePoster alt={movie.name} path={movie.posterPath} />
            </div>
            <BoxContentDetail movie={movie} showDialog={() => showDialog(movie.video[0].key)}></BoxContentDetail>
          </ContentGrid>
        </div>
      </BannerMovieContent>
    </BannerMovie>
  )
}

const BoxContentDetail = ({ movie, showDialog }) => (
  <ContentDetail>
    <Title>
      {movie.name} <TextOpacity>({getYear(movie.date)})</TextOpacity>
    </Title>
    <h3>Overview</h3>
    <article className="overview">{movie.overview}</article>
    <h3>
      Genres : <TextOpacity>{getGenres(movie.genres)}</TextOpacity>
    </h3>
    <Button width="15em" height="3em" onClick={showDialog}>
      WATCH TRAILER
    </Button>
  </ContentDetail>
)

function getYear(date: string) {
  if (date) {
    return date.split("-")[0]
  }
  return ""
}

export function getGenres(genres: Genre[]) {
  if (!isEmpty(genres)) {
    return genres.map(val => val.name).join(", ")
  }
  return "General"
}

export default Banner
