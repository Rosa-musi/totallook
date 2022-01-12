import React from 'react'
import Header from './Componentes/Header/Header'
import Category from './Componentes/Category/Category';
import Footer from './Componentes/Footer/Footer'
import Main from './Componentes/Main/Main';
import {DataProvider} from './context/dataContext'

import './App.css'


function App() {
  return (
    <div className="App">
      <DataProvider>
      <Header/>
      <Main/> 
      <Category/>
      <Footer/>
      </DataProvider>  
    </div>
  );
  
}

export default App;
