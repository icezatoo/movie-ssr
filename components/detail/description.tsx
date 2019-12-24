import { IDetailModel } from "common"
import useHover from "custom/useHover"
import React from "react"
import Slider from "react-slick"
import styled from "styled-components"
import Actor from "./actor"

interface IBoxProp {
  movie: IDetailModel
  showDialog: (movieID: string) => void
}

const BoxVideoContent = styled.div`
  margin: 0 0.3em;
  outline: none;
  position: relative;
  cursor: pointer;

  img {
    object-fit: cover;
    overflow: hidden;
    width: 100%;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    border-width: 0px;
    border-radius: 4px;
  }
`

const ContentButton = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`

const PlayButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`

const SectionContent = styled.section`
  margin: 3rem 0;
`

const ContentVideo = styled.div`
  display: flex;
`

const ContentIcon = styled.div`
  width: 25%;
  height: auto;
  margin: 0 auto;
  fill: #fff !important;
`

const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
}

const Description: React.FC<IBoxProp> = ({ movie, showDialog }) => {
  return (
    <div className="container">
      <SectionContent>
        <h2>Top casts</h2>
        <Actor actorList={movie.cast}></Actor>
      </SectionContent>
      {movie.video.length && (
        <SectionContent>
          <h2>Videos</h2>
          <VideoMovieLayout video={movie.video} showDialog={showDialog}></VideoMovieLayout>
        </SectionContent>
      )}
    </div>
  )
}

const VideoMovieLayout = ({ video, showDialog }) => {
  if (video.length >= 3) {
    return (
      <Slider {...settings}>
        {video.map(val => (
          <CardVideo key={val.id} videokey={val.key} showDialog={showDialog}></CardVideo>
        ))}
      </Slider>
    )
  } else {
    return (
      <ContentVideo>
        {video.map(val => (
          <CardVideo key={val.id} videokey={val.key} showDialog={showDialog}></CardVideo>
        ))}
      </ContentVideo>
    )
  }
}

const CardVideo = ({ videokey, showDialog }) => {
  const [ref, hovered] = useHover()
  return (
    <BoxVideoContent ref={ref} onClick={() => showDialog(videokey)}>
      <img src={`https://img.youtube.com/vi/${videokey}/mqdefault.jpg`} />
      {hovered && (
        <ContentButton>
          <PlayButton>
            <IconSVG></IconSVG>
          </PlayButton>
        </ContentButton>
      )}
    </BoxVideoContent>
  )
}

const IconSVG = () => (
  <ContentIcon>
    <a href="#">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
        <polygon points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69" />
        <path d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z" />
      </svg>
    </a>
  </ContentIcon>
)

export default Description
