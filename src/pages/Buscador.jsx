import axios from "axios";
import { useState } from "react";
import { ItemBuscador } from "../components/ItemBuscador";

export const Buscador = ({resultados, setResultados, favoritos, setFavoritos}) => {
    const [nombre, setNombre] = useState('');
    const [errorBusqueda, setErrorBusqueda] = useState(false);

    const buscarPelicula = async(e) => {
        e.preventDefault();
        const busqueda = nombre.replace(/\s/g, '-');
        
        try {
            const responce = await axios.get('http://www.omdbapi.com/?apikey=8bbc10f6&t='+busqueda);
            if(!responce.data.Error) {
              setNombre('');
              setResultados([responce.data, ...resultados]);
            }
            else{
                setErrorBusqueda(true);
                setTimeout(() => {
                    setErrorBusqueda(false);  
                }, 3000);
            }
        } catch (error) {
            console.log(error)
        }
    }


  return (
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-6">
            <form className="form-app pt-5" onSubmit={buscarPelicula} >
              <div className="my-3">
                <input 
                  type="search" 
                  className="input-app" 
                  placeholder="Ingresa el titulo de la pelicula..."
                  onChange={(e) => { setNombre(e.target.value)} }
                  value={nombre}
                />
              </div>

              <input className="btn-app" type="submit" value='Buscar'/>

              <p className={errorBusqueda?'text-danger opacity-100': 'opacity-0'} >No se encontro la pelicula, por favor ingrese otro titulo...</p>           

            </form>
          </div>
          <div className="col-12 col-lg-6">
            <div className="result">
                {(resultados.length === 0)? 
                    <p className="text-center opacity-50" >Aun no tienes busquedas realizadas...</p>
                    :
                    <>
                    {resultados.map((r,i)=>(
                        <ItemBuscador key={i} data={r} favoritos={favoritos} setFavoritos={setFavoritos}/>
                    ))
                    }
                    </>
                }              
            </div>
          </div>
        </div>
        
      </div>
  )
}
