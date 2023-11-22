import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './pageThree.css';
import axios from 'axios';

const PageThree = () => {
  const { id } = useParams();
  const [petDetails, setPetDetails] = useState({
    petType: '',
    description: '',
    skills: '',
  });

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await axios.get("http://localhost:8080/new/get/:id");
        const petData = response.data;
        setPetDetails({
          petType: petData.PetType,
          description: petData.description,
          skills: petData.Skills.join(", "), 
        });
      } catch (error) {
        console.error("Error al obtener detalles de la mascota:", error);
      }
    };

    fetchPetDetails();
  }, [id]);

  return (
    <div className="page-three">
      <div className="header">
        <h1>Pet Shelter</h1>
        <div className="actions">
          <Link to="/" className="back-link">
            Back to Home
          </Link>
         
        </div>
      </div>
      <p>Details about: garfield</p>
      <form className='formulario'>
        <label>
          Pet Type:
          <input type="text" name="petType" value={petDetails.petType} readOnly />
        </label>
        <label>
          Description:
          <textarea name="description" value={petDetails.description} readOnly />
        </label>
        <label>
          Skills:
          <input type="text" name="skills" value={petDetails.skills} readOnly />
        </label>
        <button className="adopt-button">Adopt</button>
        <br></br>
        <button type="submit" className="like-button">
          Like
        </button>
      </form>
    </div>
  );
};

export default PageThree;