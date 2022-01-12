import React from 'react'
import Header from './Componentes/Header/Header'
import Category from './Componentes/Category/Category';
import Footer from './Componentes/Footer/Footer'
import Main from './Componentes/Main/Main'
import Acceso from './Login/Acceso'
import { DataProvider } from './context/dataContext'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"


import './App.css'


function App() {
  return (
    <Router>
      <div className="App">
        <DataProvider>
          <Header/>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/signIn" element={<Acceso/>}/>
            <Route path="/Categorias" element={<Category/>}/>
          </Routes>
          <Footer/>
        </DataProvider>
      </div>
    </Router>

  );
}

export default App;
