import React from "react"
import Model from "components/modal"
import Video from "components/video"

interface IModelVideoProp {
  videoID: string
  showDialog: boolean
  closeModel: () => void
}

const ModelVideo: React.FC<IModelVideoProp> = ({ showDialog, videoID, closeModel }) => (
  <Model show={showDialog} close={closeModel} title="Play Trailer">
    {showDialog && <Video id={videoID}></Video>}
  </Model>
)

export default ModelVideo
