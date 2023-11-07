import FormularioHooks from "./components/formulariohooks/formulariohooks";
import TodoJunto from "./components/todojunto/todojunto";
import Wrapper from "./components/elevacion/wrappers";
import UserForm from "./components/UserForms/UserForms";
import QueHaceres from "./components/QueHacer/QueHacer";
import PokemonApi from "./components/pokemonApi/pokemonApi";

function App() {
  return (
    <div> 
        <div>
          <PokemonApi> </PokemonApi>
          {/*<MasFormulario></MasFormulario>*/}
          {/*<QueHaceres></QueHaceres>*/}
         
          {/*<UserForm></UserForm>*/}
          {/*<div className="App">
          <Wrapper items={['something', 'sombrero', 'wholesome', 'ransom', 'apple', 'react', 'javascript']}/>*/}
        
           {/*<FormularioHooks></FormularioHooks>*/}
         {/*<TodoJunto></TodoJunto>*/}
        </div>
    </div>
  
  );
}

export default App;

