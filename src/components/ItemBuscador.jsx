import { useState } from "react";
import { DetallesPelicula } from "./DetallesPelicula";


export const ItemBuscador = ({data, setFavoritos, favoritos}) => {
    const imgDefault = 'https://images.vexels.com/media/users/3/191703/isolated/preview/3477bc55ba545dc9005d5b89f593a5ea-buena-produccion-de-peliculas.png';
    const [detallesPelicula, setDetallesPelicula] = useState(false);

  return (
    <>
        {/* VENTANA */}
        {detallesPelicula&&
            <DetallesPelicula 
            data={data} 
            imgDefault={imgDefault} 
            setDetallesPelicula={setDetallesPelicula} 
            favoritos={favoritos} 
            setFavoritos={setFavoritos}/>
        }


        <div className="item-buscador" onClick={() => {setDetallesPelicula(s=>!s)}} >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <img src={data.Poster==='N/A'? imgDefault:data.Poster} width='80px' />
                    </div>
                    <div className="col-9">
                        <p className="mb-0"><span className="fw-bold" >Titulo:</span> {data.Title}</p>
                        <p className="mb-0"><span className="fw-bold" >Lanzamiento:</span> {data.Year}</p>
                        <p className="mb-0"><span className="fw-bold" >Genero:</span> {data.Genre}</p>
                        <p className="mb-0"><span className="fw-bold" >Director:</span> {data.Director}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
