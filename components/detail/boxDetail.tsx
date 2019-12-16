import { IDetailModel } from "common"
import ImagePoster from "components/imagePoster"
import React from "react"
import Actor from "./actor"

interface IBoxProp {
  movie: IDetailModel
}

const BoxDetail: React.FC<IBoxProp> = ({ movie }) => {
  console.log(movie)
  return (
    <div className="container main-box-detail">
      <div className="layout-detail">
        <div className="layout-description">
          <div className="layout-description-image">
            <ImagePoster alt={movie.name} path={movie.posterPath} />
          </div>
          <div className="layout-description-content">
            <div className="header-overview">
              <h2>Overview</h2>
              {movie.homepage && <ButtonIcon link={movie.homepage}></ButtonIcon>}
            </div>
            <article className="overview">{movie.overview}</article>
          </div>
          <div className="layout-actor">
            <h3>Cast</h3>
            <Actor actorList={movie.cast}></Actor>
          </div>
        </div>
        <div>Test2</div>
      </div>
    </div>
  )
}

const ButtonIcon = ({ link }) => (
  <a className="dot" href={link} target="_blank">
    <div className="icon-content">
      <i className="fas fa-home"></i>
    </div>
  </a>
)

export default BoxDetail
