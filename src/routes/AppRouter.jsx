import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from '../App';
import '../styles/App.css';
import { Buscador } from '../pages/Buscador';
import { useState } from 'react';
import { Favoritos } from '../pages/Favoritos';



export const AppRouter = () => {

  const [resultados, setResultados] = useState([]);
  const [favoritos, setFavoritos] = useState([])


  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
              <Route index element={<Navigate to='/buscador'/>}/>
              <Route path="buscador" element={<Buscador resultados={resultados} setResultados={setResultados} favoritos={favoritos} setFavoritos={setFavoritos}/>}/> 
              <Route path="favoritos" element={<Favoritos favoritos={favoritos} setFavoritos={setFavoritos} />}/> 
            </Route>
            <Route path="*" element={<App/>}/> 
        </Routes>
    </BrowserRouter>
  )
}
