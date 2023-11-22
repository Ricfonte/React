import React, { useState } from 'react';
import './pageTwo.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PageTwo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    petName: '',
    petType: '',
    petDescription: '',
    skill1: '',
    skill2: '',
    skill3: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddPet = async (event) => {
    event.preventDefault();

    try {
      
      await axios.post("http://localhost:8080/new/create", formData);

      navigate('/');
    } catch (error) {
      console.error("Error al inscribir mascota", error);
     
    }
  };

  return (
    <div className="page-two">
      <h1>Pet Shelter</h1>
      <h2>Know a pet needing a home</h2>
      <form onSubmit={handleAddPet}>
        <div className="form-section">
          <div className="pet-info">
            <label>Pet Name:</label>
            <input
              type="text"
              name="petName"
              value={formData.petName}
              onChange={handleInputChange}
            />
            <label>Pet Type:</label>
            <input
              type="text"
              name="petType"
              value={formData.petType}
              onChange={handleInputChange}
            />
            <label>Pet Description:</label>
            <input
              type="text"
              name="petDescription"
              value={formData.petDescription}
              onChange={handleInputChange}
            />
          </div>
          <div className="skills-section">
            <label>Skill 1:</label>
            <input
              type="text"
              name="skill1"
              value={formData.skill1}
              onChange={handleInputChange}
            />
            <label>Skill 2:</label>
            <input
              type="text"
              name="skill2"
              value={formData.skill2}
              onChange={handleInputChange}
            />
            <label>Skill 3:</label>
            <input
              type="text"
              name="skill3"
              value={formData.skill3}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button type="submit" className="add-pet-button">
          Add Pet
        </button>
      </form>
    </div>
  );
};

export default PageTwo;