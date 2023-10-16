import { useState } from "react";


function Componentes(props){

    const [stockState, setStockState] = useState(props.stock) //estados
    const [precioState, setPrecioState] = useState(80) //estados
    const [botonState, setBotonState] =useState ("Exclamacion")

    const buy = () =>{
         var newStock = stockState-1;
        setStockState (newStock);
    } 
    
    const dcto = () =>{
        var newPrecio = precioState-10;
        setPrecioState (newPrecio);
    }

    const excl =() => {
        setBotonState (botonState + "!")

    }

   return(
        <div>
        <img src= {props.imagen} style = {{width:"150px"}}></img>
        <p> {props.nombre}</p>
        <p> ${precioState}</p>
        <p> El stock es: {stockState} prendas</p>
        <button onClick={buy}>COMPRAR</button>
        <button onClick={dcto}>DESCUENTO</button>
        <button onClick={excl}>{botonState}</button>
        

        </div>
    );
}
export default Componentes;