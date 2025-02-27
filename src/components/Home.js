import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in by checking for 'user' data in localStorage
    const user = localStorage.getItem('user');
    
    if (!user) {
      // Redirect to login page if no user is found
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home Page. You are logged in!</p>
    </div>
  );
};

export default Home;
