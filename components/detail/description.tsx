import React from "react"
import Slider from "react-slick"
import styled from "styled-components"
import Actor from "./actor"
import { IDetailModel } from "common"

interface IBoxProp {
  movie: IDetailModel
}

const BoxVideoContent = styled.div`
  margin: 0 0.5em;
  outline: none;
  position: relative;
  // cursor: pointer;

  img {
    object-fit: cover;
    overflow: hidden;
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

const settings = {
  className: "slider variable-width",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  dots: false,
  arrows: false,
  // autoplay: true,
  // autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const Description: React.FC<IBoxProp> = ({ movie }) => {
  return (
    <div className="container">
      <SectionContent>
        <h2>Top casts</h2>
        <Actor actorList={movie.cast}></Actor>
      </SectionContent>
      <SectionContent>
        <h2>Videos</h2>
        <VideoMovieLayout video={movie.video}></VideoMovieLayout>
      </SectionContent>
    </div>
  )
}

const VideoMovieLayout = ({ video }) => {
  return (
    <Slider {...settings}>
      {video.map(val => (
        <BoxVideoContent key={val.id}>
          <img src={`https://img.youtube.com/vi/${val.key}/mqdefault.jpg`} />
          {/* <ContentButton>
            <PlayButton>Test</PlayButton>
          </ContentButton> */}
        </BoxVideoContent>
      ))}
    </Slider>
  )
}

export default Description
