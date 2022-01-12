import Header from './Componentes/Header/Header'
import Category from './Componentes/Category/Category';
import Footer from './Componentes/Footer/Footer'
import Main from './Componentes/Main/Main'
import Edition from './Componentes/AdminCategory/AdminCategory'

import './App.css'


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/> 
      <Category/>
      <Edition/>
      <Footer/>
    </div>
  );
}

export default App;
