import React from 'react'
import { getRandomResponse } from '../utils/randomResponses';

function Card({ guest }) {
    if (!guest) {
        return null;
    }
    return(
        <>
            <div >
                <h3>Querido/a, {guest.name}</h3>
                <p>Luego de analizar tu pregunta "{guest.question}", mi respuesta es la siguiente:</p>
                <h2>{getRandomResponse()}</h2>
                <p>Espero que esto te haya iluminado en tu camino.</p>
            </div>
        </>
    );
};

export default Card;
