import React, { useState } from 'react';
import './style.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleForgotPassword = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email) {
      storedUser.password = newPassword;
      localStorage.setItem('user', JSON.stringify(storedUser));
      alert('Password updated successfully');
    } else {
      alert('No user found with this email');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button onClick={handleForgotPassword}>Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
