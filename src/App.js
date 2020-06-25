import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import PokeCard from "./components/PokeCard"

function App() {

const [data, setData] = useState([]);

useEffect(()=>{
  axios
    .get(`https://api.pokemontcg.io/v1/cards/`)
    .then(res=>{
      setData(res.data.cards);
    })
    .catch(err=>console.log(err))
}, []);
 console.log(data);

 let newData = [];

  return (
    <div className="App">
      <h1>
        Pokemon<span role="img" aria-label="pokelove">❤️</span>Pokedex!
      </h1>

      {data.map(pokeData => {
        return( 
          <PokeCard 
            key={pokeData.id}
            name={pokeData.name}
            subtype={pokeData.subtype}
            image={pokeData.imageUrl}
            type={pokeData.types}
            evolution={pokeData.evolvesFrom}
            pokeNum={pokeData.nationalPokedexNumber}
          />
        );
      
       
      })}
     
    </div>
  );
}

export default App;
