import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const CreateBookPage = (props) => {
    const [title, setTitle] = useState("");
    const [yearPublished, setYearPublished] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    const submitBook = async () => {
        if(title != "" && yearPublished != ""){
            var obj = {
                "title": title,
                "yearPublished": yearPublished,
                "idAuthor": params.idAuthor
            };
    
            var response = await axios.post("http://localhost:8080/api/book/create", obj);
            if(response.status == 200){
                alert("Se registro correctamente");
                navigate("/");
            } else {
                alert("Hubo un error");
            }
        } else {
            alert("Llena todos los campos");
        }
    }

    const cancel = () => {
        navigate("/");
    }

    return (
        <div>
            <h1>New Book</h1>
            <div>
                <label>Title</label>
                <br />
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <br />
                <label>Year Published</label>
                <br />
                <input type="text" value={yearPublished} onChange={(e) => setYearPublished(e.target.value)} />
                <br />
                <br />
                <button onClick={cancel}>Cancel</button>
                <button onClick={submitBook}>Submit</button>
            </div>
        </div>
    );
};