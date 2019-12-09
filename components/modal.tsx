import React, { ReactNode } from "react"

interface IModelProp {
  show: boolean
  close: () => void
  title: string
  children?: ReactNode
}

const Model: React.FC<IModelProp> = ({ show, close, title, children }) => {
  return (
    <div
      id="myModal"
      className="modal"
      style={{
        display: show ? "block" : "none",
      }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={() => close()}>
            &times;
          </span>
          <h2>{title}</h2>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}

export default Model
