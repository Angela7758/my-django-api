import React, { useState } from 'react';

function MyComponent() {

  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isStudent, setIsStudent] = useState(true);

  const updateName = () => {
    setName("Liqin");
  }

  const incrementAge = () => {
    setAge(age => age + 1);
  }

  const toggleTask = () => {
    setIsStudent(!isStudent);
  }

  return (
    <div>
      <p>Name: {name}</p>   
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is Student: {isStudent ? "Yes" : "No"}</p>
      <button onClick={toggleTask}>Toggle Student Status</button>
    </div>
  );
}

export default MyComponent;
