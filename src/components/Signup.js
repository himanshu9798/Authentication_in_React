import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './style.css'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    const userData = {
      email,
      password,
      name
    };
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/');
  };

  return (
    <div>
      <h2>Sign Up</h2><br/>
     
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
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Sign Up</button>
        
        <h2><Link to='/change-password'>ChangePassword</Link></h2>
        <br/>
      </form>
    

    </div>
  );
};

export default Signup;
