import logo from './logo.svg';
import './App.css';
import BarraMenu from './componentes/barraMenui';

function App() {

const mensaje=()=>{
  console.log('Hola a todos');
}

  return (
    <div>
      <h1>Hola a todos</h1>
      <button onClick={mensaje}>Enviar</button>
      <BarraMenu/>
    </div>
  );
}

export default App;
