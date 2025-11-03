import React from 'react'
import { useNavigate, useParams } from "react-router-dom"
import useTrailers from '../hooks/useTrailers'

export default function MovieDetail() {
  const [trailers] = useTrailers()
  const navigate = useNavigate()
  const {id} = useParams()

  const trailer = trailers.find(e => String(e.id) === id)
  if (!trailer) return <p className="error">PELICULA no encontrada</p>

  return (
    <div>
      <div>
        <h2>PELICULA: {trailer.titulo}</h2>
        <div className="movie-poster">
          <img src={trailer.poster} alt={trailer.titulo} />
        </div>
        <div className="movie-info">
          <h2>Pelicula: {trailer.titulo}</h2>
          <p><strong>Resumen:</strong> {trailer.resumen}</p>
          <p><strong>Reparto:</strong> {trailer.reparto}</p>
          <p><strong>Trailer:</strong> {trailer.trailer}</p>
        </div>
        <button onClick={() => navigate(`/`)}>Volver al Catalogo</button>
      </div>
    </div>
  )
}


