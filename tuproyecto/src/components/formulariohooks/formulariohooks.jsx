import {useState} from "react";
import "./formulariohooks.css";
const FormularioHooks = (props) =>{
    
    const prueba=() =>{
        console.log("lo logre2");
        console.log(first);
        console.log(last);
        console.log(email);
        console.log(password);
        console.log(repeat);




    }
    const [first, setFirst]=useState("")
    const [last, setLast] =useState("")
    const [email, setEmail] =useState("")
    const [password, setPassword] =useState("")
    const [repeat, setRepeat] =useState("")

    
    const onChangeFirstName = (event) =>{
         setFirst(event.target.value);
    }
    const onChangeLast = (event) =>{
        setLast(event.target.value);
   }
   const onChangeEmail = (event) =>{
        setEmail(event.target.value);
}
   const onChangePassword = (event) =>{
         setPassword(event.target.value);
}
const onChangeRepeat = (event) =>{
    setRepeat(event.target.value);
}


    
    return(
        <div>
            <form id="formulario">
            <label>First Name</label>
            <input type="text" value={first} onChange={onChangeFirstName}/>
            <br></br>
            <label>Last Name</label>
            <input type="text" value={last} onChange={onChangeLast}></input>
            <br></br>
            <label>Email</label>
            <input type="email" value={email} onChange={onChangeEmail}></input>
            <br></br>
            <label>Password</label>
            <input type="password" value={password} onChange={onChangePassword}></input>
            <br></br>
            <label>Repeat Password</label>
            <input type="password" value={repeat} onChange={onChangeRepeat}></input>
            <br></br>
            <button onClick={prueba}>login</button>
            </form>
            <div id="data">
                <h4>Your Form Data</h4> 
                 First Name  {first};
                 <br></br>
                 Last Name  {last};
                 <br></br>
                 Email {email};
                 <br></br>
                 Password  {password};
                 <br></br>
                 Repeat Password  {repeat};
            </div>
        </div>
            

        )
}
export default FormularioHooks