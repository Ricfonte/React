import React, { useState } from "react";


const Counter = props =>{
    const [state, setState] = useState({
        clickCount: 0
    
    });

const clickCounter =()=> {
    setState ({ 
        clickCount: state.clickCount +1})

     
}

return (
    <div>
        { state.clickCount }
        <button onClick={ clickCounter }>Click Me</button>
    </div>
)
}

export default Counter;
