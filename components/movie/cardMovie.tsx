import ImagePoster from "components/imagePoster"
import React from "react"
import { animated } from "react-spring"
import { Movie } from "services"
import styled from "styled-components"

type CardMovieProps = { movie: Movie }

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

const CardMovie = ({ movie }: CardMovieProps) => {
  return (
    <CardMovieContent>
      <CardMovieImage>
        <ImagePoster alt={movie.title} path={movie.poster_path} />
      </CardMovieImage>
      <div>
        <Title title={movie.original_title}>{movie.original_title}</Title>
        <span>{movie.release_date}</span>
      </div>
    </CardMovieContent>
  )
}

export default CardMovie
