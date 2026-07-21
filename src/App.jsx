import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Produtos from './pages/produtos/Produtos'
import Sobre from './pages/sobre/Sobre'
import Contato from './pages/contato/Contato'
import './App.css' 
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { FaWhatsappSquare } from "react-icons/fa";

function App() {


  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Produtos/>}/>
          <Route path='/about' element={<Sobre/>}/>
          <Route path='/contact' element={<Contato/>}/>
        </Routes>
      <Footer/>
         <a href="https://wa.link/307ehj" target='_blank' rel="noopener noreferrer"><FaWhatsappSquare className={"whats"}/></a>
    </BrowserRouter>
  )
}

export default App
