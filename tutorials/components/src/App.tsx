import "./App.css";
import sound from './assets/sounds/Infecticide-11-Pizza-Spinoza.mp3';
import image1 from './assets/images/js-logo.png';


function App() {
  return (
    <div className="page">
      <Header title="We love pizza" version={0+1}/>
      <Main />
      <Footer></Footer>
    </div>
  );
}


const Header = (props : {title:string, version:number}) => {
  return (
    <header>
      <h1 className="animate__animated animate__bounce">{props.title}</h1>
      <h4> Version: {props.version}</h4>
    </header>
  );
}

const Main = () => {
  return (
        <main>
            <p>My HomePage</p>
            <p>
              Because we love JS, you can also click on the header to stop / start the
              music ; )
            </p>

            <audio id="audioPlayer" controls autoPlay>
              <source
                src= {sound}
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </main>
  );
}

const Footer = () => {
  return (
        <footer>
            <h1 className="animate__animated animate__bounce animate__delay-2s">
              But we also love JS
            </h1>
            <img src= {image1} alt="" />
          </footer>
  );
}

export default App;