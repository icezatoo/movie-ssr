import React from "react"

const TVDetail = ({ id }) => {
  return <h1>{id}</h1>
}

TVDetail.getInitialProps = async function({ query }) {
  return {
    id: query.id,
  }
}

export default TVDetail
