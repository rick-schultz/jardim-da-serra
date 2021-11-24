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
            <img
              src={LogoImg}
              alt="itude logo"
              onClick={() => window.open('https://itude.com.br', '_blank')}
            />
          </div>
          <div className="section">
            <div className="sidebar">
              <img src={Garden} alt="garden background" />
              <div className="line"></div>
              <h1>POUCAS UNIDADES!</h1>
              <button
                onClick={() =>
                  window.open(
                    'https://api.whatsapp.com/send?phone=5535999073990',
                    '_blank'
                  )
                }
              >
                SAIBA MAIS
              </button>
              <img src={Solutions} alt="soluções imobiliárias logo" />
            </div>
            <div className="background">
              <div>
                <h1>NÃO FIQUE DE FORA DESSA OPORTUNIDADE!</h1>
                <img src={FamilyImg} alt="family" />
                <h1>NÃO FIQUE DE FORA DESSA OPORTUNIDADE!</h1>
              </div>
            </div>
            <button
              onClick={() =>
                window.open(
                  'https://api.whatsapp.com/send?phone=5535999073990',
                  '_blank'
                )
              }
            >
              SAIBA MAIS
            </button>
          </div>
        </main>
      </div>
    </>
  )
}
