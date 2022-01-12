import React from 'react'
import Header from './Componentes/Header/Header'
import Category from './Componentes/Category/Category';
import Footer from './Componentes/Footer/Footer'
import Main from './Componentes/Main/Main'
import Modal from './Componentes/Modal/Modal'

import './App.css'


function App() {
  return (
    <div className="App">
      <Header/>
      <Modal/>
      <Main/> 
      <Category/>
      <Footer/>

    </div>
  );
}

export default App;
