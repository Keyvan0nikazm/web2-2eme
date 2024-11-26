import { useEffect, useState } from 'react';
import './DogRandom.css';

interface Dog {
  message: string;
}

function DogRandom() {
    const [dog, setDog] = useState<Dog | undefined>(undefined)

    const fetchImage = async () => {
      try{
        const response = await fetch("https://dog.ceo/api/breeds/image/random")

        if(!response.ok) {
          throw new Error('Network response was not ok');
        };

        const dog = await response.json();
        setDog(dog)
      }catch(error){
        console.error('There was a problem with your fetch operation:', error)
    }
};

    useEffect(() => {
      const interval = setInterval(() => {
      fetchImage()
      }, 5000);
      return () => clearInterval(interval);
    }, [])

  
    return (
      <>
        <h1>Exercice 2.14b</h1>
        <h2>Random dog picture</h2>
        <div>
          {dog && <img src={dog.message} alt="dog" className='pictures'/>}
        </div>
      </>
    )
  }

  
  export default DogRandom;