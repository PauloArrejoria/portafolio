import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import Proyectos from "./componentes/Proyectos";
import Footer from "./componentes/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="text-white">Test</h1>
      <Hero />
      <Proyectos />
      <Footer />
    </div>
  );
}

export default App;
