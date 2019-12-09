import React from "react"
import { BASE_EMBED_URL } from "constant"
import styled from "styled-components"

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  &:before {
    content: "";
    display: block;
    padding-top: 56.25%; // 9 / 16 in percent
  }
`

const VideoLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const VideoPlayer = styled.iframe`
  min-height: 280px;
  width: 100%;
  height: 100%;
`

const Video = ({ id }) => {
  const embedUrl = `${BASE_EMBED_URL}${id}`
  return (
    <VideoContainer>
      <VideoLayout>
        <VideoPlayer src={embedUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="video" />
      </VideoLayout>
    </VideoContainer>
  )
}

export default Video
