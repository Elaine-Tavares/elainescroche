
import { Link } from 'react-router-dom'
import logo from '../../images/home_img.webp'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.header_navbar}>
      <div className={styles.container_logo}>
        <Link to={'/'}><img className={styles.logo} src={logo}/></Link>
      </div>

      <div>
{/* Botão hamburger (mobile) */}
        <button 
          className={`${styles.hamburger} 
          `}
         
        >
          {/*spans para animação do hamburger*/}
          <span></span> 
          <span></span>
          <span></span>
        </button>
      </div>
      
      
      <nav className={styles.navbar}>
        <Link to={'/'}>Home</Link>
        <Link to={'/products'}>Produtos</Link>
        <Link to={'/about'}>Sobre</Link>
        <Link to={'/contact'}>Contato</Link>
      </nav>
    </header>
  )
}
