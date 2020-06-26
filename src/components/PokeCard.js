import React from "react";

const PokeCard = ({key, name, subtype, image, type, evolutionm, pokeNum})=>{

return (
    <div className="pokeCardContainer">
    <div className="name">
        <h2>{name}</h2>
        <p>Type: {type}</p>
    </div>
    <div className="info">
    <img className="card" src={image} alt={name}/>

    </div>
    
    
    </div>);
};

export default PokeCard;