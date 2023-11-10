import { useEffect, useState } from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

export const UpdatePage = (props) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [isPublished, setIsPublished] = useState(false);
    const [books, setBooks] = useState("");

    const navigate = useNavigate();

    const params = useParams();
    var authorId = params.id;

    useEffect(() => {
        getAuthorData();
    }, []);

    const getAuthorData = async () => {
        var result = await axios.get("http://localhost:8080/api/author/getOne/" + authorId);
        setName(result.data.name);
        setAge(result.data.age);
        setIsPublished(result.data.isPublished);
        setBooks(result.data.books);
    }

    const updateAuthor = async () => {
        var authorData = {
            "name": name,
            "age": age,
            "isPublished": isPublished,
            "books": books
        }

        try{
            var result = await axios.put("http://localhost:8080/api/author/update/" + authorId, authorData);
            if(result.status == 200){
                navigate("/");
            }
        }catch(e){
            alert(e.response.data.message);
        }
    }

    const goToHome = () => {
        navigate("/");
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/">Home</Link>
            <p>Edit this author</p>
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
                <button onClick={goToHome}>Cancel</button>
                <button onClick={updateAuthor}>Submit</button>
            </div>
        </div>
    );
};