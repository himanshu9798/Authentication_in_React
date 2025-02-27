import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './style.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      navigate('/home');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={(e) => e.preventDefault()}>
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
        <button onClick={handleLogin}>Login</button>
        <br/>
        <p style={{textAlign:"center"}}><Link to="/forgot-password">Forget Password</Link></p>
        <h3 style={{textAlign:"center"}}><Link style={{color:"Green",textDecoration:"none"}} to="/signup">Sign-Up</Link></h3>
        <br/>
      </form>
      <br/>
      
     
    </div>
  );
};

export default Login;
