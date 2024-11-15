import { useState, SyntheticEvent } from 'react'
import './App.css'
import {Film} from './type'
import FilmMenu from './FilmMenu'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import PageTitle from "./components/PageTitle/PageTitle";
import Cinema from "./components/Cinema/Cinema";


const NavBar = () => {
  const navigate = useNavigate();
  return (
  <nav>
    <button onClick={() => navigate("/")}>Home</button>
    <button onClick={() => navigate("/CinemaPage")}>Cinema</button>
    <button onClick={() => navigate("/MovieListPage")}>Movies</button>
  </nav>
  );
};

const HomePage = () => {
  return (
    <div>
      <h1>Bienvenue sur notre application de cinéma</h1>
      <p>
        Découvrez notre application de cinéma, votre destination ultime pour tout ce qui concerne le monde du cinéma. 
        Que vous soyez un cinéphile passionné ou simplement à la recherche d'un bon film à regarder, notre application 
        vous offre une expérience complète et immersive.
      </p>
      <p>
        Explorez notre vaste collection de films, des classiques intemporels aux dernières sorties. 
        Consultez les horaires des séances dans vos cinémas préférés, lisez des critiques et des avis, 
        et créez votre propre liste de films à voir. 
        Avec notre application, vous ne manquerez jamais une nouvelle sortie ou une projection spéciale.
      </p>
      <p>
        Rejoignez notre communauté de cinéphiles et partagez vos avis et recommandations. 
        Profitez également de fonctionnalités exclusives telles que la réservation de billets en ligne, 
        des alertes pour les avant-premières et des offres spéciales pour les membres.
      </p>
      <p>
        Plongez dans l'univers du cinéma avec notre application et vivez une expérience cinématographique inoubliable.
      </p>
    </div>
  );
};

const MovieListPage = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC De Brouckère";

  const moviesCinema1 = [
    {
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
      description:
        "A high-energy sports anime movie focusing on the intense volleyball rivalry between Karasuno High and their fierce competitors.",
    },
    {
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
      description:
        "A poignant drama that explores themes of love, loss, and the complex dynamics of human relationships in a deeply emotional narrative.",
    },
    {
      title: "INCEPTION",
      director: "Christopher Nolan",
      description:
        "A mind-bending sci-fi thriller where a skilled thief, who enters people's dreams to steal secrets, is given a chance to have his criminal record erased if he can implant an idea into a target's subconscious.",
    },
    {
      title: "PARASITE",
      director: "Bong Joon-ho",
      description:
        "An Oscar-winning dark comedy thriller that examines class disparities through the story of two families — one wealthy, the other destitute — and their increasingly complicated relationship.",
    },
  ];

  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2 = [
    {
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
      description:
        "A suspenseful thriller that follows a group of people who are under constant surveillance, leading them to uncover dark secrets about their observers and themselves.",
    },
    {
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
      description:
        "The latest installment in the action-packed Bad Boys franchise, featuring detectives Mike Lowrey and Marcus Burnett as they take on their most dangerous case yet.",
    },
    {
      title: "TENET",
      director: "Christopher Nolan",
      description:
        "A complex and visually stunning sci-fi action film where a protagonist embarks on a time-bending mission to prevent World War III, navigating through a world of temporal inversion.",
    },
    {
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
      description:
        "An epic crime drama that chronicles the life of Frank Sheeran, a mob hitman, as he reflects on his involvement with the Bufalino crime family and the mysterious disappearance of his friend, Jimmy Hoffa.",
    },
  ];

    
    return (
      <div>
        <PageTitle title={pageTitle} />
  
        <Cinema name={cinema1Name} movies= {moviesCinema1} />
  
        <Cinema name={cinema2Name} movies={moviesCinema2} />

      </div>
    );
}

const CinemaPage = () => {
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

const App = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}

const  nextFilmID = (films: Film[]) => {
  return films.reduce((max, film) => Math.max(max, film.id), 0) + 1;
}


export default App
export {HomePage, NavBar, MovieListPage, CinemaPage}
