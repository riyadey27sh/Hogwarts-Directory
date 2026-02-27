import {useState, useEffect} from 'react';
const CharacterCard=({character, onClick})=>{
    const houseColor=character.house? `card-${character.house.toLowerCase()}`:'card-default';
    return(
        <div className={`character-card ${houseColor}`} onClick={onClick}>
            <img
                src={character.image || `https://picsum.photos/200?random=${character.name}`}
                alt={character.name}/>
            <h3>{character.name}</h3>
            <p>Species: {character.species}</p>
        </div>
    );
};
;
export default CharacterCard;