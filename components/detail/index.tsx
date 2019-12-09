import { IDetailModel } from "common"
import React from "react"
import Banner from "./banner"

interface IDetailProp {
  movieDetail: IDetailModel
}

const Detail: React.FC<IDetailProp> = ({ movieDetail }) => <Banner movie={movieDetail}></Banner>

export default Detail
