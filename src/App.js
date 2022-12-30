import {FiSearch} from 'react-icons/fi';
import './styles.css';

function App() {
  return (
    <div className="container">

      <div className='containerInput'>
        <h1 className="title">Buscador CEP</h1>

        <input
          type="text"
          placeholder = "Insira o seu CEP"
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>
      
      <main className='main'>
        <h2>CEP 59149-193</h2>

        <span>Rua José Ferreira de Lima</span>
        <span>Emaús</span>
        <span>Parnamirim</span>
        <span>RN</span>
      </main>

    </div>

    
  );
}

export default App;
