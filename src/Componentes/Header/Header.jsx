import React, {useContext}  from 'react'
import './header.css'

//import {DataContext} from '../../context/dataContext'

import logo from '../../assets/Logo.png'
import shopCart from '../../assets/shopping-cart.png'
import { DataContext} from '../../context/dataContext'


export default function Header(){
    //const {getEmail, Email, password, setPassword} = useContext()
    const {email} = useContext(DataContext);
    return (
        <div className='navContainer'>
            <img className='navContainer_logo' src={logo} alt="logo"/>
            <div className='userContainer'>
                <p className='sign'>Sign in  </p>
                {email === 'admin@totalook.com' && (
          <p> Hola {email}</p>
        )}
                <img className='userContainer_cartIcon' src={shopCart} alt="boton carrito compras"/>
            </div>
        </div>
    )
}