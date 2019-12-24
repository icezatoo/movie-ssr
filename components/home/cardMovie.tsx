import ImagePoster from "components/imagePoster"
import Link from "next/link"
import React from "react"
import { MovieCard } from "services"
import styled from "styled-components"
type CardMovieProps = { movie: MovieCard }

const CardMovieContent = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
`

const CardMovieImage = styled.div`
  height: 300px;
  position: relative;
  cursor: pointer;
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
  const hrefLink = movie.mode === "Movie" ? "/detail/[id]" : "/detail-tv/[id]"
  const asLink = movie.mode === "Movie" ? `/detail/${movie.id}` : `/detail-tv/${movie.id}`
  return (
    <CardMovieContent>
      <CardMovieImage>
        <Link href={hrefLink} as={asLink}>
          <a>
            <ImagePoster alt={movie.original_name} path={movie.poster_path} />
          </a>
        </Link>
      </CardMovieImage>
      <Title title={movie.original_name}>{movie.original_name}</Title>
      <CardDetail>
        <span>{movie.date}</span>
        <BoxIcon>
          <i className="fas fa-star"></i>
          <AverageTitle>{movie.vote_average}</AverageTitle>
        </BoxIcon>
      </CardDetail>
    </CardMovieContent>
  )
}

export default CardMovie
