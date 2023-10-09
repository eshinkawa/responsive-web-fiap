// SingleFileApp.js
import React, { useEffect, useState, Suspense } from "react";
import "./styles.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="single-file-app">
      <h1>Rick and Morty Characters</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <ul className="character-list">
          {characters.map((character) => (
            <li key={character.id} className="character-item">
              <img
                src={character.image}
                alt={character.name}
                className="character-image"
              />
              <p className="character-name">{character.name}</p>
            </li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}

export default App;
