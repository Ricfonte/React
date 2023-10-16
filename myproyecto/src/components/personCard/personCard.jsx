
function PersonCard(props){
    
    return(
     <div>
        <h1 style ={{textAlign: "center"}}>{props.lastName}, {props.firstName}</h1>
        <p style ={{textAlign: "center"}}>Age {props.age} </p>
        <p style ={{textAlign: "center"}}>Hair Color: {props.hairColor}</p>

     </div>

   ) 
}

export default PersonCard;