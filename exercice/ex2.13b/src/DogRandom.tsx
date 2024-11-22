import { useEffect, useState } from 'react';

interface Dog {
  message: string;
}

function DogRandom() {
    const [dog, setDog] = useState<Dog | undefined>(undefined)
  
    const fetchImage = () => {
      fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) =>  {
        setDog({
        message : data.message ?? "no dog found",
      });
    });
};
      
    useEffect(() => {
      fetchImage()
    }, [])

  
    return (
      <>
        <h1>Exercice 2.13b</h1>
        <h2>Random dog picture</h2>
        <div>
          {dog && <img src={dog.message} alt="dog" />}
        </div>
      </>
    )
  }

  
  export default DogRandom;