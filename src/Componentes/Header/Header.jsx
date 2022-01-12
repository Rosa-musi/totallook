import React, {useContext}  from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.png'
import shopCart from '../../assets/shopping-cart.png'
import { DataContext} from '../../context/dataContext'


export default function Header(){
    //const {getEmail, Email, password, setPassword} = useContext()
    const {email} = useContext(DataContext);
    return (
        <div className='navContainer'>
            <Link to="/"><img className='navContainer_logo' src={logo} alt="logo"/></Link>
            <div className='userContainer'>
                <Link to="/signIn"><p className='sign'>Sign in  </p></Link>
                {email === 'admin@totalook.com' && (
          <p> Hola {email}</p>
        )}
                <img className='userContainer_cartIcon' src={shopCart} alt="boton carrito compras"/>
            </div>
        </div>
    )
}