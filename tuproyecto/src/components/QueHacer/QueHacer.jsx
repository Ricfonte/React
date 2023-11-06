import { useState } from "react";
import "./QueHacer.css";

 const QueHaceres = (props) => {
    const [listaQueHaceres, setListaQueHaceres] = useState([]);
    const [input, setInput] = useState("");

    const agregar = () =>{
        
        var listaQueHaceresTemporal = [...listaQueHaceres];
      
        var objetoTemporal = {
            id: 4,
            nombre: input,
            checked: false
        }
      
        listaQueHaceresTemporal.push(objetoTemporal);
        setListaQueHaceres(listaQueHaceresTemporal);
    }

    const eliminar = (indice) => {
        var listaQueHaceresTemporal = listaQueHaceres.filter((item, i) => i != indice);
        setListaQueHaceres(listaQueHaceresTemporal);
    }

    const terminarTarea = (indice) => {
        var queHacerTemporal = {...listaQueHaceres[indice]};
        queHacerTemporal.checked = (queHacerTemporal.checked == true) ? false : true;

        var listaQueHaceresTemporal = [...listaQueHaceres];
        listaQueHaceresTemporal[indice] = queHacerTemporal;

        setListaQueHaceres(listaQueHaceresTemporal);
    }

    return (
        <div className="todo">
            <div>
                <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}}/>
                <button className="boton" onClick={agregar}>Add</button>
            </div>  

            <div>
                {
                    listaQueHaceres.map((queHacer, index) => {
                        return <div>
                            
                            <label className={(queHacer.checked == true) ? "label-checked" : "label-normal"}
                                    onClick={()=>{terminarTarea(index)}}>{queHacer.nombre}</label>

                            <input type="checkbox" checked={queHacer.checked} onChange={()=>{terminarTarea(index)}}/>
                            <button onClick={()=>{eliminar(index)}}>Delete</button>
                        </div>
                    })
                }
            </div>
        </div>
    );
};
export default QueHaceres;