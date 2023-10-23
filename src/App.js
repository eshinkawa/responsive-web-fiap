// SingleFileApp.js
import React, { useEffect, useState, Suspense } from "react";
import "./styles.css";
import Modal from "./modal";

function App() {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [personagemDetalhado, setPersonagemDetalhado] = useState({});

  useEffect(() => {
    const listaNaoParseada = localStorage.getItem("listaFavoritos");
    const listaParseada = JSON.parse(listaNaoParseada) || []; //se a lista nao existir, setar um array vazio

    setFavorites(listaParseada);
  }, []);

  useEffect(() => {
    buscarPersonagens();

    // b
  }, []);

  //camada de dados

  const buscarPersonagens = () => {
    fetch("https://rickandmortyapi.com/api/character")
      // transformar dados da API em formado JSON
      .then((response) => response.json())

      .then((data) => {
        // conceito de map e filter
        const personagens = data.results.filter((_, index) => index < 10); // personagens
        // colocar na variavel do estado de personagens
        // fazer coisas do react
        setCharacters(personagens);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  const handleCharacter = (personagem) => {
    // criar uma copia do array de favoritos
    const personagensNovo = [...favorites]; // na primeira vez, vai estar vazio = []
    personagensNovo.push(personagem);

    const listaStringficadaAtualizada = JSON.stringify(personagensNovo);
    localStorage.setItem("listaFavoritos", listaStringficadaAtualizada);

    //com o personagensNovo atualizado, colocamos no estado do react
    setFavorites(personagensNovo);

    // favoritos atualizado
  };

  const abrirMaisDetalhes = (detalhePersonagem) => {
    console.log("detalhePersonagem: ", detalhePersonagem);

    setIsOpen(true); // colocando no state do react
    setPersonagemDetalhado(detalhePersonagem); // colocando no state do react
  }

  // camada de view => JSX / HTML
  return (
    <div className="single-file-app">
      <h1>Rick and Morty Characters</h1>
      {/* unordered list = lista nao ordenada */}
      <ul className="character-list">
        {/* <input type="name" onChange={(evento) => console.log('event: ', event.target.value)} /> */}
        {characters.map((character) => (
          <li
            key={character.id}
            className="character-item"
            onClick={() => abrirMaisDetalhes(character)}
          >
            <img
              src={character.image}
              alt={character.name}
              className="character-image"
            />
            <p className="character-name">{character.name}</p>
          </li>
        ))}
      </ul>

      <Modal isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} personagemDetalhado={personagemDetalhado} />

    </div>
  );
}

export default App;
