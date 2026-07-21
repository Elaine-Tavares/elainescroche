

import logo from '../../images/home_img.webp'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


import styles from './Navbar.module.css'

export default function Navbar() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  //pegar o usuário que foi salvo no localstorage ao login ser efetuado
  const user = JSON.parse( localStorage.getItem("user"));

  // Função que alterna o menu mobile
  function toggleMenu(){
    setMenuOpen(!menuOpen)
  }

  // Função que fecha o menu
  function closeMenu(){
    setMenuOpen(false)
  }

  async function handleLogout(){

  try{
      closeMenu()

      await api.post('/logout.php')

      localStorage.removeItem('user')

      navigate('/')

    }catch(error){
      console.error("Erro ao fazer logout", error)
    }

}

  // trava scroll quando o menu estiver aberto
  useEffect(() => {
    if(menuOpen){
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container_navbar}>

        <Link to="/" className={styles.logo}>
          <img  src={logo} alt="Logo do site" />
          <span>Elaine's Crochê</span>
        </Link>

        {/* Botão hamburger (mobile) */}
        <button 
          className={`${styles.hamburger} 
          ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          {/*spans para animação do hamburger*/}
          <span></span> 
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.menu} ${menuOpen ? styles.show_menu : ""}`}>
          <li onClick={closeMenu}><Link to="/">Home</Link></li>
          <li onClick={closeMenu}><Link to="/products">Produtos</Link></li>
          <li onClick={closeMenu}><Link to="/about">Sobre</Link></li>
          <li onClick={closeMenu}><Link to="/contact">Contato</Link></li>

            {/* {user && 
            <>
              <li onClick={closeMenu} className={styles.btn_action}>
                <Link to="/dashboard">Dashboard</ Link>   
              </li>
              <li onClick={closeMenu} className={styles.btn_action}>
                <Link to="/myplans">Meus Planos</ Link>   
              </li>
              <li onClick={handleLogout} className={styles.btn_action}>
                <Link>Sair</ Link>   
              </li>
            </>}
              
            {!user && 
              <>
                <li onClick={closeMenu} className={styles.btn_action}>
                  <Link to="/login">Login</Link>
                </li>
                <li onClick={closeMenu} className={styles.btn_action}>
                  <Link to="/signup">Cadastrar</Link>
                </li>
              </>
              } */}
        </ul>
        
        <div 
          className={`${styles.overlay} ${menuOpen ? styles.show_menu : ""}`} onClick={closeMenu}>
        </div>  
      </div> 
    </nav>
  )
}


