import { useState, useEffect } from 'react'

export default function useTrailers() {
  const [trailers, setTrailers] = useState([])

  useEffect(() => {
    fetch('/trailerflix.json')
      .then(res => res.json())
      .then(data => {
        const trailers = data
        console.log(trailers)
        setTrailers(trailers)
      })
  }, [])

  return [trailers]
}
