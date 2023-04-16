import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import style from './NavBar.module.css'


function NavBar() {
  return (
   <nav className={style.nav}>
    <Link className={style.NavLink} to='/'>
      <h1 className={style.h1}>My Store</h1>
    </Link>
    <div className={style.div}>
      <NavLink to={`/category/remeras`} activeClassName='active' className={style.NavLink}>Remera</NavLink>
      <NavLink to={'/category/auriculares'} activeClassName='active' className ={style.NavLink}>Auricular</NavLink>
      <NavLink to='/category/camperas' activeClassName='active' className={style.NavLink}>Parcka</NavLink>
      <NavLink  to='/category/botellas' activeClassName ='active' className={style.NavLink}>Bottella</NavLink>
      <NavLink to='/category/anteojos' activeClassName='active' className={style.NavLink}>Anteojos</NavLink>
      <NavLink to='/category/gorros' activeClassName='active' className={style.NavLink}>Gorrito</NavLink>
      <NavLink to='/category/mochilas' activeClassName='active' className={style.NavLink}>Mochila</NavLink>
      <NavLink to='/category/zapatillas' activeClassName='active' className={style.NavLink}>zapatilla</NavLink>
    </div>
    <CartWidget className={style.CartWidget}/>
   </nav>
  )
}

export default NavBar