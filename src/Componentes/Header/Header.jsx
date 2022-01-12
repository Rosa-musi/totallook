import React, {useContext}  from 'react'
import './header.css'

//import {DataContext} from '../../context/dataContext'

import logo from '../../assets/Logo.png'
import shopCart from '../../assets/shopping-cart.png'


export default function Header(){
    //const {getEmail, Email, password, setPassword} = useContext()
    return (
        <div className='navContainer'>
            <img className='navContainer_logo' src={logo} alt="logo"/>
            <div className='userContainer'>
                <p className='sign'>Sign in  </p>
                <img className='userContainer_cartIcon' src={shopCart} alt="boton carrito compras"/>
            </div>
        </div>
    )
}