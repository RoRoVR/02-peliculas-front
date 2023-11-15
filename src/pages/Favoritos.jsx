import { ItemBuscador } from '../components/ItemBuscador';

export const Favoritos = ({favoritos, setFavoritos}) => {
  return (
    <div className='container-favoritos'>
        {(favoritos.length === 0)?
            <p className='text-center' >Aun no tienes peliculas agregadas...</p>
            :
            <>
                {favoritos.map((f,i)=>(
                    <ItemBuscador key={i} data={f} favoritos={favoritos} setFavoritos={setFavoritos} />
                ))

                }
            </>
        }

    </div>
  )
}
