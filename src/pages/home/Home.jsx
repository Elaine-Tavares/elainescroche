import ImagemHome from '../../images/home_img.webp'
import styles from './Home.module.css'
import bolsa from '../../images/bolsa.jpg'
import sousplat from '../../images/sousplat.jpg'
import amigurumi from '../../images/amigurumi_ursinho.jpg'
import cropped from '../../images/cropped.jpg'
import almofada from '../../images/almofada.jpg'

export default function Home() {
  const produtos = [
    {
      id: 1,
      nome: "Bolsa de Crochê",
      preco: "R$ 89,90",
      imagem: `${bolsa}`,
    },
    {
      id: 2,
      nome: "Sousplat Artesanal",
      preco: "R$ 39,90",
      imagem: `${sousplat}`,
    },
    {
      id: 3,
      nome: "Amigurumi",
      preco: "R$ 59,90",
      imagem: `${amigurumi}`,
    },
     {
      id: 4,
      nome: "Cropped",
      preco: "R$ 59,90",
      imagem: `${cropped}`,
    },
    {
      id: 5,
      nome: "Almofada",
      preco: "R$ 49,90",
      imagem: `${almofada}`,
    },
  ];

  return (
    <main className='container'>
      <section className={styles.container_home}>
        <div className={styles.container_home_text}>
          <h1>Transforme fios em sonhos</h1>
          <h1>Garanta já o seu crochê 🧶</h1>
          <span>Elaine's Crochê</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sint deserunt modi neque rerum corrupti beatae unde. Aliquid magnam minus </p>
          <div className={styles.actions_home}>
            <button>Compre Crochê</button>
            <button>Aprenda Crochê</button>
          </div>
        </div>
        <div className={styles.container_home_image}>
          <img src={ImagemHome} alt="" />
        </div>
      </section>

      <hr className={styles.linha_de_separacao}/>

      <section className={styles.destaques}>
        <div className={styles.header}>
          <h2>Destaques</h2>
          <p>Peças que encantam! 💖</p>
        </div>

        <div className={styles.list}>
          {produtos.map((produto) => (
            <div key={produto.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={produto.imagem} alt={produto.nome} />
              </div>

              <div className={styles.info}>
                <h3>{produto.nome}</h3>
                <span className={styles.price}>{produto.preco}</span>

                <div className={styles.actions_produto}>
                  <button className={styles.btn_ver_produto}>
                    Ver Detalhes
                  </button>
                  <button className={styles.btn_ver_produto}>
                    Comprar agora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className={styles.linha_de_separacao}/>

      <section className={styles.apresentacao}>
         {/* TEXTO */}
        <div className={styles.content}>
          <h2>
            Crochê que transforma detalhes em sentimentos 🧶
          </h2>

          <p>
            Cada peça é feita à mão com carinho, trazendo exclusividade e 
            aconchego para o seu dia a dia. Perfeito para presentear ou 
            deixar seu lar ainda mais especial.
          </p>

          <button className={styles.btn_ver_colecao}>
            Ver coleção
          </button>
        </div>

        {/* IMAGEM */}
        <div className={styles.imageWrapper}>
          <img 
            src={ImagemHome} 
            alt="Peças de crochê artesanais"
          />
        </div>
      </section>
    </main>
  )
}
