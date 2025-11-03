import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"

export default function Header() {
  const navigate = useNavigate()

  function inicio () {
    if (confirm('¿Desea iniciar sesion?')){
      navigate(`/inicio`)
    }
  } 
  return (
    <div>
      <div className="title">
        <h1 className="red-text logo-title">TRAILERFLIX</h1>
        <button onClick={inicio} className='inicio'>Inicio Sesion</button>
      </div>
    </div>
  )
}
