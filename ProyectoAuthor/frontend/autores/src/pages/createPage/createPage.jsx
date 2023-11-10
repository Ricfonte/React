import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

export const CreatePage = (props) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [isPublished, setIsPublished] = useState(false);
    const [books, setBooks] = useState("");
    const navigate = useNavigate();

    const cancelForm = () => {
        navigate("/");
    }

    const submitForm = async () => {
        if(name != "" && age != "" && books != ""){
            var dataAuthor = {
                "name": name,
                "age": age,
                "isPublished": isPublished,
                "books": books
            };
    
            try {
                var result = await axios.post("http://localhost:8080/api/author/create", dataAuthor);
                if(result.status == 200){
                    navigate("/");
                }
            } catch(e) {
                alert(e.response.data.message);
            }
        } else {
            alert("Llene el formulario");
        }
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/">Home</Link>
            <p>Add a new Author</p>
            <div>
                <label>Name:</label>
                <br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <br />
                <label>Age:</label>
                <br />
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
                <br />
                <label>Is Published:</label>
                <br />
                <input type="checkbox" checked={isPublished} onChange={(e) => setIsPublished(e.target.checked)}/>
                <br />
                <label>Books:</label>
                <br />
                <input type="number" value={books} onChange={(e) => setBooks(e.target.value)}/>
                <br />
                <br />
                <button onClick={cancelForm}>Cancel</button>
                <button onClick={submitForm}>Submit</button>
            </div>
        </div>
    );
};