import { useState, useEffect } from 'react'

export default function useTrailers() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    fetch('/usuarios.json')
      .then(res => res.json())
      .then(data => {
        const usuarios = data.users
        console.log(usuarios)
        setUsuarios(usuarios)
      })
  }, [])

  return [usuarios]
}
