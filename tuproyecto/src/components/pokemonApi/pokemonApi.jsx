import { useState } from "react";
import axios from 'axios';
import "./pokemonApi.css";

const PokemonApi = (props) => {

    const [pokemones, setPokemones] = useState([]);

    const llamarApi = async () =>{
        var response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
        var lista = response.data.results;

        setPokemones(lista);
    }

    return (
        <div className="body">
            <button onClick={llamarApi}>Fetch Pokemon</button>
            <br/>
            <button style = {{marginTop:"30px", backgroundColor:"green", color:"white"}} > Buscar Pokemon</button>


            {
                pokemones.map((item, index) => {
                    return <div>
                        <p> {item.name}</p>
                        
                    </div>
                })
            }

        </div>
    );
};

export default PokemonApi;