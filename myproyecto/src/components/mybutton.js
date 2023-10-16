import { Component } from "react";

class MyButton extends Component{
    render(){
        var title = this.props.title;
        
        return (
            <div>
            <button style={{background: "black", color: "white"}}>{title}</button>
            </div>
        )
    }
}

export default MyButton;