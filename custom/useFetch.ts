import React, { useState, useEffect } from "react"

const useFetch = action => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await action()
        setResponse(res)
      } catch (error) {
        setError(error)
      }
    }
    FetchData()
  }, [])
  return { response, error }
}

export default useFetch
