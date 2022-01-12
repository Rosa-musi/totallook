import React, {useContext}  from 'react'
import './header.css'
import { Link } from 'react-router-dom'

import {DataContext} from '../../context/dataContext'

import logo from '../../assets/Logo.png'
import shopCart from '../../assets/shopping-cart.png'
import sign from '../../assets/user.png'



export default function Header(){
    const {email, setShow} = useContext(DataContext);
    return (
        <div className='navContainer'>
            <Link to="/"><img className='navContainer_logo' src={logo} alt="logo"/></Link>
            <div className='userContainer'>
                <img className='sign' src={sign} alt="imgUser"/> 
                <Link to="/signIn"><p className='sign'>Sign in  </p></Link>
                {email === 'admin@totalook.com' && (
          <p> Hola </p>
        )}
                <img className='userContainer_cartIcon' src={shopCart} alt="boton carrito compras"/>
            </div>
        </div>
    )
}