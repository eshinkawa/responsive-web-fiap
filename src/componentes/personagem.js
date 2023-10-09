
import React, { useEffect, useState, Suspense } from "react";
import '../styles.css';

export default function Personagem({image, name, status, species, gender}) { //recebendo props = propriedades
    return(<div className="item">
    <img src={image} className="imagem" />
    <h2>{name}</h2>
    <div>{status}</div>
    <div>{species}</div>
    <div>{gender}</div>
  </div>)
}