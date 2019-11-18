import React, { useState, useEffect } from "react"
import { useTransition, animated, config } from "react-spring"
import styled from "styled-components"
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
  background-position: left top;
  z-index: 1;
`

const SlickContainer = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0)

  useInterval(() => {
    setActiveImage(state => (state + 1) % 10)
  }, 3000)

  const transitions = useTransition(images[activeImage], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })

  return (
    <MainSlickLayout>
      {transitions.map(({ item, props, key }) => (
        <AnimatedWallpaper key={key} style={{ ...props, backgroundImage: `url(${item.path})` }} />
      ))}
    </MainSlickLayout>
  )
}

export default SlickContainer
