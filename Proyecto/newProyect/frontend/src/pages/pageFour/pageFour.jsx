import React from 'react';
import './pageFour.css';

const PageTwo = () => {
  return (
    <div className="page-four">
      <h1>Pet Shelter</h1>
      <h2>Edit Garfield</h2>
      <form>
        <div className="form-section">
          <div className="pet-info">
            <label>Pet Name:</label>
            <input type="text" name="petName" />
            <label>Pet Type:</label>
            <input type="text" name="petType" />
            <label>Pet Description:</label>
            <input type="text" name="petDescription" />
          </div>
          <div className="skills-section">
            <label>Skill 1:</label>
            <input type="text" name="skill1" />
            <label>Skill 2:</label>
            <input type="text" name="skill2" />
            <label>Skill 3:</label>
            <input type="text" name="skill3" />
          </div>
        </div>
        <button type="submit" className="add-pet-button">Add Pet</button>
      </form>
    </div>
  );
};

export default PageTwo;