import "./App.css";
import BarraMenu from "./componentes/barraMenui";
import {BrowserRouter as Router} from 'react-router-dom';
import Rutas from "./services/Rutas";

function App() {
  

  return (
    <Router>
    <div className="container">
      <section>
        
        <BarraMenu />
        
      </section>
    </div>
    <Rutas/>
    
    </Router>
  );
}

export default App;
