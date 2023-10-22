import {useState} from "react";

const Pruebas = (props)=> {

    const [producto, setProducto] = useState ("")
    const [gramaje, setGramaje] = useState ("")
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
  


    const onChangeProducto =(event) =>{
        setProducto(event.target.value)
    }

    const onChangeGramaje =(event) =>{
        setGramaje(event.target.value)
    }

    const onChangeEmail =(event) =>{
        setEmail(event.target.value)
    }
    const onChangePassword =(event) =>{
        setPassword(event.target.value)
    }


    return(
        <div>
        <h1>Formulario de Cotización</h1>
        <br></br>
        <label>Producto</label>
        <input type="text" value={producto} onChange={onChangeProducto}/>
        <br></br>
        <select value={gramaje} onChange={onChangeGramaje}>
            <option value="">Seleccione Gramaje</option>
            <option value="200">200grs</option>
            <option value="250">250grs</option>
            <option value="300">300grs</option>
            
        </select>
        <br></br>
        <label>Email</label>
        <input  type="email" value={email} onChange={onChangeEmail} />
        <br></br>

        <label>Password</label>
        <input type="password"  value={password} onChange={onChangePassword}/>
        <br></br>

        <button>Enviar</button>
    
        <div>
            <h1>Lo solicitado</h1>
            Producto {producto};
            <br></br>
            Gramaje {gramaje};
            <br></br>
            Email {email};
            <br></br>
            Password {password};
            
            
        </div>
    
    
    
    
    </div>

        
    )
}

export default Pruebas


