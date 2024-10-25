import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Click from './components/CompteurClick'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Click 
          titre="Compteur de clics" 
          message="You are a master in the art of clicking !"
        />
      </div>
    </>
  )
}

export default App
