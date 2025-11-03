import React from 'react'
import { useNavigate} from "react-router-dom"

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div>
      <h2 className="red-text" >404 - Página no encontrada.</h2>
      <p>La pagina no fue encontrada podria volver a intentarlo</p>
      <button onClick={() => navigate(`/`)}>Volver al Catalogo</button>
    </div>
  )
}
