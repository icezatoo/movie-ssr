import React from "react"
import { imageEndPoint } from "constant"
import styled from "styled-components"

const ImageContent = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  overflow: hidden;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border-width: 0px;
  border-radius: 4px;
`

const ImagePoster = ({ alt, path }) => (
  <ImageContent
    loading="lazy"
    srcSet={`${imageEndPoint}/w154${path} 154w,
             ${imageEndPoint}/w185${path} 185w,
             ${imageEndPoint}/w342${path} 342w,
             ${imageEndPoint}/w500${path} 500w`}
    src={`${imageEndPoint}/w500${path}`}
    sizes="(max-width: 1380px) 100vw, 500px"
    alt={alt}
  />
)

export default ImagePoster
