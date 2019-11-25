import ImagePoster from "components/imagePoster"
import React from "react"
import { MovieCard } from "services"
import styled, { css } from "styled-components"

type CardMovieProps = { movie: MovieCard }

const CardMovieContent = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
`

const CardMovieImage = styled.div`
  height: 300px;
  position: relative;
`

const Title = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const CardDetail = styled.div`
  display: flex;
  justify-content: space-between;
`

const BoxIcon = styled.div`
  color: yellow;
`

const AverageTitle = styled.span`
  margin: 0 0.5em;
`

const CardMovie = ({ movie }: CardMovieProps) => {
  return (
    <CardMovieContent>
      <CardMovieImage>
        <ImagePoster alt={movie.title} path={movie.poster_path} />
      </CardMovieImage>
      <div>
        <Title title={movie.original_name}>{movie.original_name}</Title>
        <CardDetail>
          <span>{movie.release_date}</span>
          <BoxIcon>
            <i className="fas fa-star"></i>
            <AverageTitle>{movie.vote_average}</AverageTitle>
          </BoxIcon>
        </CardDetail>
      </div>
    </CardMovieContent>
  )
}

export default CardMovie
