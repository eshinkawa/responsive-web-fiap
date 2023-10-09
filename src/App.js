
// Aula2 - tópicos
// chamados de API via fetch
// como dispor items do array no JSX
// modelo CSS flex

import React, { useEffect, useState, Suspense } from "react";
import Personagem from './componentes/personagem';
import './styles.css';


function App() {
  // adicionando personagens no estado do react
  const [personagens, setPersonagens] = useState([])

  //chamada de api dentro do useEffect
  // useEffect = efeito colateral no seu
  useEffect(() => {
    buscarPersonagens()
  }, [])
    
  
  function buscarPersonagens(){

    // chamar a url da api
    // fetch retorna uma promise. PROMISE = algo que pode gerar um valor agora ou no futuro
    fetch('https://rickandmortyapi.com/api/character')
     //converter o resultado em json
     // tranformar o que vem da APi em formato JSON, de forma que a aplicação JS entenda que é de fato um JSON
     .then(res => res.json())
     // fazer coisas do react
     .then(resultado => { 
      setPersonagens(resultado.results)
     })
  }
    
  // retorna o html, que é na verdade um JSX
  return <div className="container">
    {personagens.map(item =>
      <Personagem image={item.image} name={item.name} species={item.species} gender={item.gender} />
    )}
  </div>
}

export default App;


