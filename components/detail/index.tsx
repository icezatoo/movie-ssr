import { IDetailModel } from "common"
import React, { useState } from "react"
import Banner from "./banner"
import BoxDetail from "./boxDetail"
import ModelVideo from "./modelVideo"
import "./boxdetail.scss"

interface IDetailProp {
  movieDetail: IDetailModel
}

const Detail: React.FC<IDetailProp> = ({ movieDetail }) => {
  const [isShow, setShowDialog] = useState(false)

  const showDialog = () => {
    setShowDialog(true)
  }

  const closeDialog = () => {
    setShowDialog(false)
  }

  return (
    <>
      <Banner movie={movieDetail} showDialog={showDialog}></Banner>
      <BoxDetail movie={movieDetail}></BoxDetail>
      <ModelVideo showDialog={isShow} videoID={movieDetail.video[0].key} closeModel={closeDialog}></ModelVideo>
    </>
  )
}

export default Detail
