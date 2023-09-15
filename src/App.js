import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import Proyectos from "./componentes/Proyectos";
import Footer from "./componentes/Footer";
import "./App.css";

function App() {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  setDarkMode();
  return (
    <div className="App">
      <Header />
      <Hero />
      <Proyectos />
      <Footer />
    </div>
  );
}

export default App;
