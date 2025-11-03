import { createContext, useContext} from 'react'
import useUsuarios from '../hooks/useUsuarios'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [usuarios] = useUsuarios() 
  console.log(usuarios)

  return (
    <AuthContext.Provider value={{ usuarios }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
