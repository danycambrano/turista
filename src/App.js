import logo from './logo.svg';
import './App.css';

function App() {

/*const mensaje=()=>{
  console.log('Hola a todos');
}*/

  return (
    <div>
      <h1>Hola a todos</h1>
      <button onClick={()=>console.log('Hola a todos')}>Enviar</button>
    </div>
  );
}

export default App;
