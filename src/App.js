import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './styles.css';

function App() {

  const [input, setInput] = useState('');

  function handleSearch(){
    console.log("CLICO KKKKKK " + input);
  }

  return (
    <div className="container">

    <h1 className="title">Buscador CEP</h1>

      <div className='containerInput'>
        

        <input
          className='inputText'
          type="number"
          placeholder = "Insira o seu CEP"
          value={input}
          onChange={ (e) => setInput(e.target.value) }
        />

        <button className="buttonSearch" onClick={handleSearch}>
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
