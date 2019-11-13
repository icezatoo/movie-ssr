import React, { useState } from "react"
import { useTransition, animated, config } from "react-spring"
import styled from "styled-components"
import { ISlickModel } from "../../common"
import { useInterval } from "../../custom/useInterval"
import Dot from "./dot"

const MainDotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 50px;
`

const MainSlickLayout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
`

const AnimatedWallpaper = styled(animated.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  will-change: opacity;
  background-position: 50% 50%;
`

const image: ISlickModel[] = [
  {
    id: 0,
    path: "https://c.wallhere.com/photos/47/66/Star_Wars_The_Last_Jedi_movies_poster_movie_poster-1201860.jpg!d",
    data: "test",
  },
  {
    id: 1,
    path: "https://images5.alphacoders.com/881/thumb-1920-881633.jpg",
    data: "test",
  },
  {
    id: 2,
    path: "https://images7.alphacoders.com/882/thumb-1920-882297.jpg",
    data: "test",
  },
]

const SlickContainer = () => {
  const [activeImage, setActiveImage] = useState(0)
  const transitions = useTransition(image[activeImage], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })

  useInterval(() => {
    if (image.length - 1 === activeImage) {
      setActiveImage(0)
    } else {
      setActiveImage(activeImage + 1)
    }
  }, 3000)

  const renderDots = () => {
    return image.map((val, index) => <Dot key={index} activeImage={activeImage === index}></Dot>)
  }

  return (
    <MainSlickLayout>
      {transitions.map(({ item, props, key }) => (
        <AnimatedWallpaper key={key} style={{ ...props, backgroundImage: `url(${item.path})` }} />
      ))}
      <MainDotContainer>{renderDots()}</MainDotContainer>
    </MainSlickLayout>
  )
}

export default SlickContainer
