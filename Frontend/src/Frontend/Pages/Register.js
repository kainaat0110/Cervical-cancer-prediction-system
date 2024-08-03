import React, { useState } from 'react';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    conpass: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: user.name,
          email: user.email,
          password: user.password
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Registration successful, you can handle redirection or display a success message
      console.log('Registration successful');
      // Redirect or display success message
      window.location.href = '/afterlogin';
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., display error message to the user)
    }
  };

  return (
    <div className="center">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <p className="form-login">Register</p>
          <div className="input-box">
            <input
              required
              placeholder="Username"
              name="name"
              value={user.name}
              onChange={handleChange}
              type="text"
            />
          </div>
          <div className="input-box">
            <input
              required
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
              type="email"
            />
          </div>
          <div className="input-box">
            <input
              required
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleChange}
              type="password"
            />
          </div>
          <div className="input-box">
            <input
              required
              placeholder="Confirm Password"
              name="conpass"
              value={user.conpass}
              onChange={handleChange}
              type="password"
            />
          </div>
          <button className="btn" type="submit">
            Register
          </button>
          <div className="register-link">
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
