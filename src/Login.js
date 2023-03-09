import React, { useState } from 'react';
import './Login.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // perform validation of the user's credentials here
    // if the credentials are correct, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome, {username}!</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button type="submit">Log In</button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
