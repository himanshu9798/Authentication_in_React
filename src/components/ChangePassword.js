import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleChangePassword = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.password === oldPassword) {
      if (newPassword === confirmPassword) {
        storedUser.password = newPassword;
        localStorage.setItem('user', JSON.stringify(storedUser));
        navigate('/home');
      } else {
        alert('Passwords do not match');
      }
    } else {
      alert('Old password is incorrect');
    }
  };

  return (
    <div>
      <h2>Change Password</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleChangePassword}>Change Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;
