import './App.css'
import FamilyImg from './assets/family.png'
import Garden from './assets/garden-logo.png'
import Solutions from './assets/solutions-logo.png'
import LogoImg from './assets/logo.png'

export default function App() {
  return (
    <>
      <div className="container">
        <main className="main">
          <div className="header">
            <a href="https://itude.com.br">
              <img src={LogoImg} alt="" />
            </a>
          </div>
          <div className="section">
            <div className="sidebar">
              <img src={Garden} alt="" />
              <div className="line"></div>
              <h1>POUCAS UNIDADES!</h1>
              <button>SAIBA MAIS</button>
              <img src={Solutions} alt="" />
            </div>
            <div className="background">
              <div>
                <h1>NÃO FIQUE DE FORA DESSA OPORTUNIDADE!</h1>
                <img src={FamilyImg} alt="" />
                <h1>NÃO FIQUE DE FORA DESSA OPORTUNIDADE!</h1>
              </div>
            </div>
            <button>SAIBA MAIS</button>
          </div>
        </main>
      </div>
    </>
  )
}
