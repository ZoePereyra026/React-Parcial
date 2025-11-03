import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import MovieDetail from './pages/MovieDetail.jsx'
import NotFound from './pages/NotFound.jsx'
import InicioSesion from './pages/InicioSesion.jsx'
import './index.css'

export default function App () {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<MovieDetail />} />
          <Route path='/inicio' element={<InicioSesion />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}