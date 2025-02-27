import React, { useState } from 'react';

const Apptest = () => {
  // State object with two fields: name and password
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  // Function to handle input changes for both fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the state using spread operator to preserve other values
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically set the field name as key and value as value
    }));
  };

  // Submit handler to show form data (can be sent to a server here)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Apptest;