import "./App.css";
import BarraMenu from "./componentes/barraMenui";
import Ropa from "./componentes/Ropa";

function App() {
  const mensaje = () => {
    console.log("Hola a todos");
  };

  return (
    <div className="container">
      <section>
        <BarraMenu />
      </section>
      <section>
        <Ropa />
      </section>
    </div>
  );
}

export default App;
