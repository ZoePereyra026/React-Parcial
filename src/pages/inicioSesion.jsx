import React from 'react'

export default function inicioSesion() {
    function validar () {
        console.log('Validacion de campos')
  } 

  return (
    <div>
        <header>
        <div className="title">
            <h1 className="red-text logo-title">TRAILERFLIX</h1>
        </div>
        <div className="login-container" >
            <form id="loginForm">
            <input type="text" id="username" placeholder="Usuario" required />
            <input
                type="password"
                id="password"
                placeholder="Contraseña"
                required
            />
            <button type="submit" onClick={validar()}>Ingresar</button>
            </form>
            <div id="userInfo">
            <span id="userNameDisplay"></span>
            <button id="logoutBtn">Cerrar sesión</button>
            </div>
        </div>
        </header>
        <main>
        <article className="filters"></article>
        <article className="container loading">
            <div className="loader"></div>
        </article>
        </main>
    </div>
  )
}
