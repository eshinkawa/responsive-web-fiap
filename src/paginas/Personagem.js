import React, { useEffect, useState, Suspense } from "react";

function Personagem() {
    const [characters, setCharacters] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const listaNaoParseada = localStorage.getItem("listaFavoritos");
        const listaParseada = JSON.parse(listaNaoParseada) || []; //se a lista nao existir, setar um array vazio

        setFavorites(listaParseada);
    }, []);


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
                        onClick={() => adicionarFavoritos(character)}
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
                    <div className="item-favorito">
                        <div key={favorite.id}>
                            {favorite.name}
                        </div>
                        <button onClick={() => apagarDoFavoritos(favorite.id)}>Apagar</button>
                    </div>
                ))}
            </div>
        </div >
    );
}
export default Personagem;  