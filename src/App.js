import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './styles.css';
import api from './services/api'

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch(){
    
    if(input === ''){
      alert("Preencha algum CEP!");
      return;
    }
    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("CEP NOT FOUND")
      setInput("");
    }
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
          onChange={ (event) => setInput(event.target.value) }
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>
      <main className='main'>
      {Object.keys(cep).length > 0 && (
        <div className='main-info'>
          <h2>{cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade}</span>
          <span>{cep.uf}</span>
        </div>
      )}
      </main>
      
      

    </div>

    
  );
}

export default App;
