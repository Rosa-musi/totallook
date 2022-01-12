import React from 'react';
import subir from '../../assets/btn-subir.png'
import borrar from '../../assets/btn-borrar.png'
import search from '../../assets/search.png'

import './adminCategory.css'

export default function Edition() {
    return (
        <div className='editionContainer'>
            <div className='productsSearch'>
                <p className='allProducts'>{'<<'} Regresar a categorías</p>
                <div id ="search">
                    <img src={search} alt="search" className="imgSearch" /> 
                    <input type="text" className='inputSearch' placeholder="Buscar"></input>
                </div>
            </div>
            <div>
                <h1>DAMAS</h1>
            </div>
            <div className='form-edit'>
                <div className='edit'>
                    <h1>Imagen</h1>
                    <input className='input-edit'></input>
                    <img src={subir} alt="subir" className="btn-edit" /> 
                    </div> 
                    <div className='edit'>
                    <h1>Nombre</h1>
                    <input className='input-edit'></input>
                    <img src={borrar} alt="subir" className="btn-edit" /> 
                    </div>
              
              
            </div>
                    

        </div>
    )
}