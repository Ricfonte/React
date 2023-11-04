import React, { useState } from 'react';
const TodoJunto = (props) => {
   
      const [people, setPeople] = useState([
        {
          firstName: "Jane",
          lastName: "Doe",
          age: 45,
          hairColor: "Black"
        },
        {
          firstName: "John",
          lastName: "Smith",
          age: 88,
          hairColor: "Black"
        }
      ]);
    
      const increaseAge = (index) => {
        const updatedPeople = [...people];
        updatedPeople[index].age += 1;
        setPeople(updatedPeople);
      };
    
      return (
        <div>
          {people.map((person, index) => (
            <div key={index}>
              <h1>{person.firstName} {person.lastName}</h1>
              <p>Age: {person.age}</p>
              <p>Hair Color: {person.hairColor}</p>
              <button onClick={() => increaseAge(index)}>Feliz cumpleaños</button>
            </div>
          ))}
        </div>
      );
    }
    
    export default TodoJunto;