import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Invalid username or password');
      }
      return res.json();
    })
    .then(data => {
      // Redirect to dashboard
      navigate('/dashboard');
      // Get current auth user
      fetch('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${data.token}`, // Include token from login response
        }, 
      })
      .then(res => res.json())
      .then(userData => {
        console.log('Current user:', userData);
        // You can store user data to state, context, or local storage for further usage
      })
      .catch(error => {
        console.error('Error:', error);
      });
    })
    .catch(error => {
      setError(error.message);
      console.error('Error:', error);
    });
  };

  return (
    <div className="login-form">
      <h1>Welcome to Logoipsum</h1>
      <p>Don't have an account? <strong>Sign Up</strong></p>
      {error && <p className="error">{error}</p>}
      <div className="form-group">
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="formbtn"onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
