import { useEffect, useState } from "react"


export const DetallesPelicula = ({data, imgDefault, setDetallesPelicula, favoritos, setFavoritos}) => {
    const [enFavoritos, setEnFavoritos] = useState(false);



    useEffect(() => {
      const encontrada = favoritos.find(p => p.Title === data.Title);
      if(encontrada) setEnFavoritos(true);
    }, [favoritos])
    
  return (
    <div className="window">
        <div className="window-container">
            <div className="window-header">
                {data.Title.toUpperCase()}
                <div className="btn-exit" onClick={() =>{setDetallesPelicula(s=>!s)}} ><i className="bi bi-x-lg"></i></div>
            </div>

            <div className="window-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-sm-5">
                            <img src={data.Poster==='N/A'? imgDefault:data.Poster} width='200px' />
                        </div>
                        <div className="col-12 col-sm-7">
                            <p className="mb-0"><span className="fw-bold" >Titulo:</span> {data.Title}</p>
                            <p className="mb-0"><span className="fw-bold" >Lanzamiento:</span> {data.Year}</p>
                            <p className="mb-0"><span className="fw-bold" >Genero:</span> {data.Genre}</p>
                            <p className="mb-0"><span className="fw-bold" >Director:</span> {data.Director}</p>
                            <p className="mb-0"><span className="fw-bold" >Escritor:</span> {data.Writer}</p>
                            <p className="mb-0"><span className="fw-bold" >Duracion:</span> {data.Runtime}</p>
                            <p className="mb-0"><span className="fw-bold" >Reparto:</span> {data.Actors}</p>
                            <p className="mb-0"><span className="fw-bold" >Lenguajes:</span> {data.Language}</p>
                            <p className="mb-0"><span className="fw-bold" >Pais:</span> {data.Country}</p>

                            <button 
                            className="btn-app-d" 
                            onClick={() => { setFavoritos(f=>[data, ...f]) }}
                            disabled={enFavoritos} 
                            >{enFavoritos? 'Marcado como favorito':'Agregar a favoritos'}</button>
                            {enFavoritos&& <i className="bi bi-star-fill fav"></i>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
