
// Aula2 - tópicos

// Usar fetch pra puxar dados de api
// Como mostrar os dados da api na tela
// display flex no CSS

import React, { useEffect, useState, Suspense } from "react";
import './styles.css';

function App() {
  // declarando o useState
  const [personagens, setPersonagens] = useState([]);

  // chamar a api

  // um dos react hooks
  // useEffect = efeito colateral no seu componente
  // roda o useEffect ao montar a página
  
  useEffect(() => {
    //efeito colateral
    getPersonagens()
  }, []);

  function getPersonagens() {
    // chamar o fetch do Javascript
    // fetch significa 'buscar'

    fetch('https://rickandmortyapi.com/api/character')
      // promise => algo que pode retornar um valor no futuro
      .then((res) => res.json())
      // coisas do react => colocar o json no state de personagens
      .then(resultado => {
        setPersonagens(resultado.results) 
      })
  }
  // diferenças entra jsx e react
  return <div className="container">
    {personagens.map(item => 
      <div className="item">
        <img src={item.image} className="imagem"/>
        <h2>Nome: {item.name}</h2>
      </div>
    )} 
  </div>;
}

export default App;


