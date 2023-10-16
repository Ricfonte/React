import {useState} from "react";
const MyLogin = (props) =>{

    const loginState = () =>{
        console.log("Lo logre");
        console.log(mail);
        console.log(password);
        console.log(repassword);
        console.log(checkbox);
        console.log(sexo);

    }
    
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState ("")
    const [checkbox, setCheckbox] = useState(false)
    const [sexo, setSexo] = useState("")
    
    
    const onChangeEmail = (event) =>{
        setMail(event.target.value);
    } 
    
    const onChangePassword = (event) =>{
        setPassword(event.target.value);
    }
    const onChangeRepassword =(event) =>{
        setRepassword(event.target.value);
    }
    const onChangeCheckbox =(event) =>{
        setCheckbox(event.target.checked);
    }
    const onChangeSexo = (event) =>{
        setSexo(event.target.value);
    }
   
 
    return(
        <div>
            <h1>Formulario</h1>
            <label>Email</label>
            <input type="text"  value={mail} onChange={onChangeEmail}/>
            <br></br>
            <label>Password</label>
            <input type="password" value={password} onChange={onChangePassword}/>
            <br></br>
            <label>Repassword</label>
            <input type="password"  value={repassword} onChange={onChangeRepassword}/>
            <br></br>
            <label>Aceptar terminos y condiciones</label>
            <input type= "checkbox" checked= {checkbox} onChange= {onChangeCheckbox}></input>
            <br></br>
            <label>Genero</label>
            <select value={sexo} onChange={onChangeSexo}>
                <option value="">Selecione su género</option>
                <option value="Masc">Masculino</option>
                <option value="Fem">Fememino</option>
            </select>
            <br></br>
            <button onClick={loginState} style = {{background: "orange", color:"white"}}>login</button>

        </div>
    )
    

}

export default MyLogin