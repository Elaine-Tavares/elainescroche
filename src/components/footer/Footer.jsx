import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

import styles from "./Footer.module.css";

export default function Footer() {
  
  // Ano atual automático
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>   
        <div className={styles.main_session_social}>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/elainetavaresweb/" target='_blank' rel="noopener noreferrer"><FaLinkedin className={styles.linkedin}/></a>

            {/* Instagram */}
            <a href="https://www.instagram.com/elainetavares2026/" target='_blank' rel="noopener noreferrer"><FaInstagramSquare className={styles.instagram}/></a>

            {/* GitHub */}
            <a href="https://github.com/Elaine-Tavares" target='_blank' rel="noopener noreferrer"><FaGithub className={styles.github}/></a>

            {/* Whats */}
            <a href="https://wa.link/307ehj" target='_blank' rel="noopener noreferrer"><FaWhatsappSquare className={styles.whats}/></a>
        </div> 
        
        <p className={styles.copy}>

          {/* Parágrafo traduzido */}
          Desenvolvido por <br/> <strong>Elaine Tavares</strong> © {year}
        </p>
      </div>
    </footer>
  );
}
