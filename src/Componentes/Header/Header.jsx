import React  from 'react'

import './header.css'

import logo from '../../assets/Logo.png'
import shopCart from '../../assets/shopping-cart.png'
import Login from '../../Login/Login'

export default function Header(){
    return (
        <div className='navContainer'>
            <img className='navContainer_logo' src={logo} alt="logo"/>
            <div className='userContainer'>
                <p className='sign'>Sign in <Login></Login></p> {/*renderizado condicional si está logueado o no */}
                <img className='userContainer_cartIcon' src={shopCart} alt="boton carrito compras"/>
            </div>
        </div>
    )
}