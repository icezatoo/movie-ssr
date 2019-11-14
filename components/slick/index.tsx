import React, { useState } from "react"
import { useTransition, animated, config } from "react-spring"
import styled from "styled-components"
import { ISlickModel } from "common"
import { useInterval } from "custom/useInterval"

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

const SlickContainer = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0)
  const transitions = useTransition(images[activeImage], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })

  useInterval(() => {
    if (images.length - 1 === activeImage) {
      setActiveImage(0)
    } else {
      setActiveImage(activeImage + 1)
    }
  }, 3000)

  return (
    <MainSlickLayout>
      {transitions.map(({ item, props, key }) => (
        <AnimatedWallpaper key={key} style={{ ...props, backgroundImage: `url(${item.path})` }} />
      ))}
    </MainSlickLayout>
  )
}

export default SlickContainer
