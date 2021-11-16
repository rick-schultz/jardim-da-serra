import './App.css'
import FamilyImg from './assets/family.png'
import Garden from './assets/garden-logo.png'
import Solutions from './assets/solutions-logo.png'

export default function App() {
  return (
    <>
      <div className="container">
        <main className="main">
          <div className="header">
            <h1>iTUDE</h1>
          </div>
          <div className="container">
            <div className="sidebar">
              <img src={Garden} alt="" />
              <div className="line"></div>
              <h1>Poucas Unidades</h1>
              <button>Saiba Mais</button>
              <img src={Solutions} alt="" />
            </div>
            <div className="background">
              <img src={FamilyImg} alt="" />
              <h1>Não fique de fora dessa oportunidade</h1>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
