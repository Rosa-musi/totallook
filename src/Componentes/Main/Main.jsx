import React, {useContext}  from 'react'
import './main.css';
import LoginForm from '../../Login/Acceso';
import search from '../../assets/search-solid.svg'
import { DataContext} from '../../context/dataContext'


export default function Main() {

    return (
        <div className='mainContainer'>
            <div className='productsSearch'>
                <p className='allProducts'>Todos los productos</p>
                <div id ="search">
                    <img src={search} alt="search" className="imgSearch" /> 
                    <input type="text" className='inputSearch' placeholder="Busca aquí"></input>
                </div>
            </div>
            <div className='promociones'>
                <div className='promocionUno'>Rebajas</div>
                <div className='promocionDos'>Envío gratis</div>
            </div>
            <div className='categorias'>
                <div className='todasLasCategorias'>Compra por categoría</div>
                <div className='categoriasPrincipales'>
                    <div className="imgCategory" ><h1 className= "nameCategory">Damas</h1></div>
                    <div className="imgCategory" ><h1 className= "nameCategory">Hombres</h1></div>
                    <div className="imgCategory" ><h1 className= "nameCategory">Hogar</h1></div>
                </div>

            </div>
        </div>
    )
}