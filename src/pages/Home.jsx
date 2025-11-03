import React from 'react'
import useTrailers from '../hooks/useTrailers'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Header from '../components/Header'

export default function Home() {
  const navigate = useNavigate()
  const [busqueda, setBusqueda] = useState('')
  const [trailers] = useTrailers()
  console.log(trailers)

  const trailersFiltrados = trailers.filter(trailer =>
    trailer.titulo.toLowerCase().includes(busqueda.toLowerCase())
  )

  console.log()
  return (
    <div>
      <Header/>
      <br />
      <div>
        <br />
        <h2 className="listado">Lista de Peliculas</h2>
        <input 
        type="text" 
        placeholder='Buscar Pelicula...'
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        />
        <ul>
          {trailersFiltrados.length === 0 && <p>No se encontraron trailer.</p>}
          {trailersFiltrados.map(trailer => (
            <li key={trailer.id}>
              <ul onClick={() => navigate(`/movie/${trailer.id}`)}> Pelicula: {trailer.titulo}</ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
