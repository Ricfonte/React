import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './pageOne.css';
import axios from "axios";

    const PageOne = () => {
        const[listPets, setListPets] = useState([]);

        useEffect(()=>{
           
            callListApi();
        }, [])

        const callListApi = async () =>{
            var result = await axios.get("http://localhost:8080/new/get")
            setListPets(result.data)


        }
        return (
          <div className="page-one">
            <div className="header">
              <h1>Pet Shelter</h1>
              <Link to="/pets/new" className="add-pet-link">Add a pet to the shelter</Link>
            </div>
            <h3>These pets are looking for a good home.</h3>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          
        {

            listPets.map((mascota, index) => {
                return <tr key={(index)}>
                <td>{mascota.PetName}</td>
                 <td>{mascota.PetType}</td>
                 <td>
                   <Link to={"/pets/:id"}>Details</Link> 
                   <br></br>
                   <Link to={"/pets/:id/edit"}>Edit</Link>
                 </td>
               </tr>
            }
            )
        }
        </tbody>
      </table>
    </div>
  );
};

export default PageOne; 