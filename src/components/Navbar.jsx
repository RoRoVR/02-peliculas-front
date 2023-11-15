import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="navbar-app" >
        <NavLink to='/buscador' className={({isActive})=>isActive?'link active':'link'} >Buscador</NavLink>
        <NavLink to='/favoritos' className={({isActive})=>isActive?'link active':'link'} >Favoritos</NavLink>
    </div>
  )
}
