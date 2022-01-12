import React, {useContext}  from 'react'
import './main.css';
import LoginForm from '../../Login/Acceso';
import search from '../../assets/search-solid.svg'
import { DataContext} from '../../context/dataContext'

import search from '../../assets/search.png'
import promoText from '../../assets/promo-text.png'
import envio from '../../assets/envio.png'

export default function Main() {

    return (
        <div className='mainContainer'>
            <div className='productsSearch'>
                <p className='allProducts'>Todos los productos {'>>'} </p>
                <div id ="search">
                    <img src={search} alt="search" className="imgSearch" /> 
                    <input type="text" className='inputSearch' placeholder="Buscar"></input>
                </div>
            </div>
            <div className='promociones'>
                <div className='promocionUno'>
                  <img src={promoText} alt="promoText" className="imgPromo" />
            </div>
                <div className='promocionDos'> 
                <h1 id='textoEnvio'> ¡Envío GRATIS en tu primer pedido! </h1>
                  <img src={envio} alt="envio" className="imgEnvio" /> 
                </div>
            </div>
            <div className='categorias'>
                <div className='todasLasCategorias'>Compra por categoría</div>
                <div className='categoriasPrincipales'>
                    <div className="boxCategory" id="imgDamas" ><h1 className= "nameCategory">Damas</h1></div>
                    <div className="boxCategory" id="imgHombres"><h1 className= "nameCategory">Hombres</h1></div>
                    <div className="boxCategory" id="imgHogar" ><h1 className= "nameCategory">Hogar</h1></div>
                </div>

            </div>
        </div>
    )
}