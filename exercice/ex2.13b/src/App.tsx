import { useState } from 'react'

import './App.css'
import DogRandom from './DogRandom'

function App() {

  const [refresh, setRefresh] = useState<boolean>(false)

  return (
    <>
        <DogRandom key={`${refresh}1`} />
        <DogRandom key={`${refresh}2`} />
        <DogRandom key={`${refresh}3`} />

        <button onClick={() => setRefresh(!refresh)}>Refresh</button>

    </>
  )
}

export default App
