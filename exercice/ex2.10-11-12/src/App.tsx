import { useState, SyntheticEvent } from 'react'
import './App.css'
import {Film} from './type'
import FilmMenu from './FilmMenu'

const defaultFilms = [
  {
    id: 1,
    title: "le bon et le truand",
    director: "Robert DE Niro",
    duration : 120,
  },
  {
    id : 2,
    title: "Vegan contre carnivores",
    director: "Dumas",
    duration : 121,
  },
  {
    id : 3,
    title: "Vegetarian",
    director: "chistopher Nolan",
    duration : 122,
  },
] ;

function App() {
  const [titre, setTitre] = useState("");
  const [directeur, setDirector] = useState("");
  const [durée, setDuration] = useState(0);
  const [lien, setUrl]  = useState("");
  const [descriptif, setDescrition] = useState("")
  const [cout, setBudget] = useState(0);
  const [films, setFilms] = useState(defaultFilms);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const newFilm = {
      id : nextFilmID(films),
      title : titre,
      director : directeur,
      duration : durée,
      url : lien ,
      description : descriptif ,
      budget : cout 
    }
    setFilms(films.concat(newFilm));
  }

  const handletitleChange = (e: SyntheticEvent) => {
    const titleInput = e.target as HTMLInputElement;
    console.log("change in pizzaInput:", titleInput.value);
    setTitre(titleInput.value);
  };

  const handledirecteurChange = (e: SyntheticEvent) => {
    const directeurInput = e.target as HTMLInputElement;
    console.log("change in pizzaInput:", directeurInput.value);
    setDirector(directeurInput.value);
  };

  const handleDurationChange = (e: SyntheticEvent) => {
    const DurationInput = e.target as HTMLInputElement;
    console.log("change in pizzaInput:", DurationInput.value);
    const value = parseFloat(DurationInput.value);
    setDuration(value);
  };

  const handleUrlChange = (e: SyntheticEvent) => {
    const UrlInput = e.target as HTMLInputElement;
    console.log("change in pizzaInput:", UrlInput.value);
    setUrl(UrlInput.value);
  };

  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    console.log("change in pizzaInput:", descriptionInput.value);
    setDescrition(descriptionInput.value);
  };

  const handlebudgetChange = (e: SyntheticEvent) => {
    const budgetInput = e.target as HTMLInputElement;
    console.log("change in pizzaInput:", budgetInput.value);
    const value = parseFloat(budgetInput.value)
    setBudget(value);
  };

  return (
    <>
      <FilmMenu films={films} />
      <div>
         <p>
            la liste des films
         </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="film">Films</label>
          <input 
          value={titre}  
          type="text"
          onChange={handletitleChange}
          required
          style={{ marginBottom: '10px', display: 'block', marginLeft: '190px' }}
          />
          <label htmlFor="directeur">directeur</label>
          <input 
          value={directeur}
          type="text"
          onChange={handledirecteurChange}
          required
          style={{ marginBottom: '10px', display: 'block', marginLeft: '190px' }}
          />
          <label htmlFor="duration">duration</label>
          <input 
          value={durée}
          type="text"
          onChange={handleDurationChange}
          required
          style={{ marginBottom: '10px', display: 'block', marginLeft: '190px' }}
          />
          <label htmlFor="url">Url(pas obligatoire)</label>
          <input 
          value={lien}
          type="text"
          onChange={handleUrlChange}
          style={{ marginBottom: '10px', display: 'block', marginLeft: '190px' }}
          />
          <label htmlFor="url">description(pas obligatoire)</label>
          <input 
          value={descriptif}
          type="text"
          onChange={handleDescriptionChange}
          style={{ marginBottom: '10px', display: 'block', marginLeft: '190px' }}
          />
          <label htmlFor="url">budget(pas obligatoire)</label>
          <input 
          value={cout}
          type="text"
          onChange={handlebudgetChange}
          style={{ marginBottom: '10px', display: 'block', marginLeft: '190px' }}
          />
          <button type="submit">Ajouter</button>
        </form>
      </div>
        
    </>
  )
}

const  nextFilmID = (films: Film[]) => {
  return films.reduce((max, film) => Math.max(max, film.id), 0) + 1;
}


export default App
