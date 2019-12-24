import { IDetailModel } from "common"
import React, { useState } from "react"
import Banner from "./banner"
import Description from "./description"
import ModelVideo from "./modelVideo"

interface IDetailProp {
  movieDetail: IDetailModel
}

const Detail: React.FC<IDetailProp> = ({ movieDetail }) => {
  const [isShow, setShowDialog] = useState(false)
  const [videoID, setVideoID] = useState("")

  const showDialog = movieID => {
    setVideoID(movieID)
    setShowDialog(true)
  }

  const closeDialog = () => {
    setShowDialog(false)
    setVideoID("")
  }

  return (
    <>
      <Banner movie={movieDetail} showDialog={movie => showDialog(movie)}></Banner>
      <Description movie={movieDetail} showDialog={movie => showDialog(movie)}></Description>
      <ModelVideo showDialog={isShow} videoID={videoID} closeModel={closeDialog}></ModelVideo>
    </>
  )
}

export default Detail
