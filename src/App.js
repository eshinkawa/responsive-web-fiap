// SingleFileApp.js
import React, { useEffect, useState, Suspense } from "react";
import "./styles.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const listaNaoParseada = localStorage.getItem(listaFavoritos)
  })

  useEffect(() => {
    console.log("buscando personagens");
    buscarPersonagens();
  }, []);

  //camada de dados

  const buscarPersonagens = () => {
    fetch("https://rickandmortyapi.com/api/character")
      // transformar dados da API em formado JSON
      .then((response) => response.json())

      .then((data) => {
        console.log(data);
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
    const personagensNovo = [...favorites]; // na primeirq vez, vai estar vazio = []
    console.log("personagensNovo: ", personagensNovo);
    personagensNovo.push(personagem);
    //com o personagensNovo atualizado, colocamos no estado do react
    setFavorites(personagensNovo);

    // favoritos atualizado
  };

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
            onClick={() => handleCharacter(character)}
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
      <h1>Lista de favoritos</h1>

      <div>
        {favorites.map((favorite) => (
          <div key={favorite.id}>
            {favorite.name} - {favorite.status}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
