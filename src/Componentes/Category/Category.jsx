import React from 'react';
import './category.css';
import search from '../../assets/search.png'

export default function Category() {
  return (
    <div id = "contentCategory">

      <div className='productsSearch'>
                <p className='allProducts'>Todos los productos {'>>'}</p>
                <div id ="search">
                    <img src={search} alt="search" className="imgSearch" /> 
                    <input type="text" className='inputSearch' placeholder="Buscar"></input>
                </div>
            </div>
      <div className='categories'>
      <div className ="boxCategory" id ="imagenDamas" border= "5px solclassName  #C39C84"> <h1 className = "nameCategory">Damas</h1> </div>
      <div className ="boxCategory" id ="imagenHombre" border= "5px solclassName  #C39C84"> <h1 className = "nameCategory">Hombres</h1> </div>
      <div className ="boxCategory"  id ="imagenAccesorios"border= "5px solclassName  #C39C84"> <h1 className = "nameCategory">Accesorios </h1> </div>
      <div className ="boxCategory"  id ="imagenHogar" border= "5px solclassName  #C39C84"> <h1 className = "nameCategory">Hogar</h1> </div>
      <div className ="boxCategory"  id ="imagenNiños" border= "5px solclassName  #C39C84"> <h1 className = "nameCategory">Niños</h1> </div>
      </div>
      </div>

  );
}

