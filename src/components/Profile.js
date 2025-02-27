import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleProfileUpdate = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    user.name = name;
    user.email = email;
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/home');
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleProfileUpdate}>Update</button>
      </form>
    </div>
  );
};

export default Profile;
