import React, { useEffect, useState, Suspense } from "react";
import { useLocation } from 'react-router-dom';

function Personagem() {
    let location = useLocation();
    const personagem = location.state
    return (
        <div className="single-file-app">
            <h1>{personagem.name}</h1>
        </div >
    );
}
export default Personagem;  