function App() {
  return (
    <div className="page">
      <Page title="Informations sur les films dans les cinémas"/> 
      <Cinema name="UGC DeBrouckère" title1="Film 1 - DeBrouckère" director1="Director A" title2="Film 2 - DeBrouckère" director2="Director B"/>
      <Cinema name="UGC Toison d'Or" title1="Film 1 - Toison d'Or" director1="Director C" title2="Film 2 - Toison d'Or" director2="Director D"/>
    </div>
  );
}

const Page = (props : {title:string}) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Cinema = (props : {name:string, title1:string, director1:string, title2:string, director2:string}) => {
  return(
    <div>
        <h2>{props.name}</h2>
        <ul>
          <li>
            <strong>{props.title1}</strong> - Réalisateur :{" "}
            {props.director1}
          </li>
          <li>
            <strong>{props.title2}</strong> - Réalisateur :{" "}
            {props.director2}
          </li>
        </ul>
    </div>
  );
}

export default App;