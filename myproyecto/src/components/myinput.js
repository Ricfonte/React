import { Component } from "react"; // el compu lo escribe solo al colocar la clase de abajo

class MyInput extends Component{  // MyInput nombre que le puse a la clase, las 1eras mayusculas, siempre "extends Component"
    render () {
        return (
        <input type="text" style= {{background: "violet"}}></input> // codigo html que se le quiere agregar mas estilo de css
        );
    }
}

export default MyInput; // cada vez que llamen a MyInput va a ejecutar esta clase