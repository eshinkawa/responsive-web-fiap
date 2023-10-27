import React, { useEffect, useState, Suspense } from "react";

function ListaPersonagens() {
    const [personagens, setPersonagens] = useState([]);
    const [favoritos, setFavoritos] = useState([]);

    const navigate = useNavigate();

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
                setPersonagens(personagens);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    };

    // camada de view => JSX / HTML
    return (
        <div className="single-file-app">
            <h1>Rick and Morty Characters</h1>
            {/* unordered list = lista nao ordenada */}
            <ul className="character-list">
                {personagens.map((personagem) => (
                    <li
                        key={personagem.id}
                        className="character-item"
                        onClick={() => navigate('/personagem', { personagem })}
                    >
                        <img
                            src={personagem.image}
                            alt={personagem.name}
                            className="character-image"
                        />
                        <p className="character-name">{personagem.name}</p>
                    </li>
                ))}
            </ul>
            <h1>Lista de favoritos</h1>
        </div >
    );
}
export default ListaPersonagens;  