import { Component } from "react";
import "./pokemon.css";

class Pokemon extends Component{
    render(){
        return(
            <div>
                <img width={200} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/867.png"></img>
                <br></br>
                <button >Hazme Click</button>
                <button >Hazme aqui</button>
                
            </div>
        );
    }
}

export default Pokemon;