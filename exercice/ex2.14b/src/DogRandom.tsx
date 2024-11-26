import { useEffect, useState } from 'react';
import './DogRandom.css';

interface Dog {
  message: string;
}

function DogRandom() {
    const [dog, setDog] = useState<Dog | undefined>(undefined)
      
    useEffect(() => {
      fetchImage()
    }, [])

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

  
    return (
      <>
        <h1>Exercice 2.13b</h1>
        <h2>Random dog picture</h2>
        <div>
          {dog && <img src={dog.message} alt="dog" className='pictures' />}
        </div>
      </>
    )
  }

  
  export default DogRandom;