import PageTitle from "../PageTitle/PageTitle";
import Cinema from "../Cinema/Cinema";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import "../../App.css";


const App = () => {
    const title_header = "WE LOVE MOVIES";
    const autor = "keyvan le magnifique"
    const pageTitle = "Informations sur les films dans les cinémas";
  
    const cinema1Name = "UGC DeBrouckère";
  
    const moviesCinema1 = [
    {
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
    },
    {
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
    },
    {
      title: "INCEPTION",
      director: "Christopher Nolan",
    },
    {
      title: "PARASITE",
      director: "Bong Joon-ho",
    },
  ];
  
  const cinema2Name = "UGC Toison d'Or";
  
  const moviesCinema2 = [
    {
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
    },
    {
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
    },
    {
      title: "TENET",
      director: "Christopher Nolan",
    },
    {
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
    },
  ]; 
  
    
    return (
      <div>
        <Header url="https://plus.unsplash.com/premium_photo-1664303124313-126bf7456982?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2luZW1hfGVufDB8fDB8fHww" title={title_header} />
        <PageTitle title={pageTitle} />
  
        <Cinema name={cinema1Name} movies= {moviesCinema1} />
  
        <Cinema name={cinema2Name} movies={moviesCinema2} />

        <Footer logo="https://images.unsplash.com/photo-1700479765112-dc70843e9792?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFydXRvfGVufDB8fDB8fHww" autor={autor}/>
      </div>
    );
  };
  
  export default App;