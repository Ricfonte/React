import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

export function ListBooksPage(props) {
    const [listBooks, setListBooks] = useState([]);
    const params = useParams();
    var idAuthor = params.idAuthor;

    useEffect(()=>{
        getBooks();
    }, []);

    const getBooks = async () => {
        var response = await axios.get("http://localhost:8080/api/book/getByAuthor/" + idAuthor);
        setListBooks(response.data);
    }

    const deleteBook = async (idBook) => {
        var response = await axios.delete("http://localhost:8080/api/book/delete/" + idBook);
        if(response.status == 200){
            alert("Se eliminó correctamente");
            var listBooksTemp = listBooks.filter((book) => book._id != idBook);
            setListBooks(listBooksTemp);
        } else {
            alert("Hubo un problema en el servidor");
        }
    }

  return (
    <div>
      <h1>Books</h1>
      <table>
        <tr>
            <th>Title</th>
            <th>Year Published</th>
            <th>Actions</th>
        </tr>
        {
            listBooks.map((book, index) => {
                return <tr>
                            <td>{book.title}</td>
                            <td>{book.yearPublished}</td>
                            <td>
                                <button onClick={() => deleteBook(book._id)}>Delete</button>
                            </td>
                        </tr>
            })
        }
      </table>
    </div>
  );
};