import React from 'react'
import Header from './Componentes/Header/Header'
import Category from './Componentes/Category/Categories';
import Footer from './Componentes/Footer/Footer'
import Main from './Componentes/Main/Main';
import Acceso from './Login/Acceso'
import {DataProvider} from './context/dataContext'
import CRUD from './CRUD/CRUD'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="App">
        <DataProvider>
          <Header/>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/signIn" element={<Acceso/>}/>
            <Route path="/categorias" element={<Category/>}/>
          </Routes>
          
          <Footer/>
        </DataProvider>  
      </div>
    </Router>
  );
  
}

export default App;
