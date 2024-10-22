import PageTitle from "../components/PageTitle";
import Carte from "../components/Cartes";
import Footer from "../components/footer";

const App = () => {
  const title = "Welcome to My App";
  const footerText = "© 2023 My App";

  const carte = [
    {
      name: "Alice",
      age: 25,
    },
    {
      name: "Bob",
      age: 30,
    },
    {
      name: "Charlie",
      age: 35,
    },
  ];

  return (
    <div>
      <PageTitle title={title}/>
      <Carte carte={carte}/>
      <Footer text={footerText}/>
    </div>
  );
};

export default App;