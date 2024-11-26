import { useState, useEffect } from 'react'
import './App.css'

interface Joke {
  joke: string;
  category : string;
}

function App() {
  const [joke, setJoke] = useState<Joke | undefined>(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `fetch error : ${response.status} : ${response.statusText}`
          );
        return response.json();
      })
      .then((joke) => setJoke(joke))
      .catch((err) => {
        console.error("HomePage::error: ", err);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <h2>Joke of the day:</h2>
        <p>joke: {joke?.joke}</p>
        <p>Category: {joke?.category}</p>
      </div>
    </>
  )
}

export default App
