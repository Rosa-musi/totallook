import React, { useContext } from "react";
import "./main.css";
import LoginForm from "../../Login/Acceso";
import CRUD from "../../CRUD/CRUD";
import search from "../../assets/search-solid.svg";
import { DataContext } from "../../context/dataContext";
import { Link } from 'react-router-dom'

export default function Main() {
    const {updateCategory} = useContext(DataContext)
  return (
    <div className="mainContainer">
      <div className="productsSearch">
        <p className="allProducts">Todos los productos</p>
        <div id="search">
          <img src={search} alt="search" className="imgSearch" />
          <input
            type="text"
            className="inputSearch"
            placeholder="Busca aquí"
          ></input>
        </div>
      </div>
      <div className="promociones">
        <div className="promocionUno">Rebajas</div>
        <div className="promocionDos">¡Envío GRATIS en tu primer compra!</div>
      </div>
      <div className="categorias">
        <Link to="/categorias"><div className="todasLasCategorias">Compra por categoría</div></Link>
        <div className="categoriasPrincipales">
          <div className="imgCategory">
            <h1 className="nameCategory">Damas</h1>
          </div>
          <div className="imgCategory">
            <h1 className="nameCategory">Hombres</h1>
          </div>
          <div className="imgCategory">
            <h1 className="nameCategory">Hogar</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
