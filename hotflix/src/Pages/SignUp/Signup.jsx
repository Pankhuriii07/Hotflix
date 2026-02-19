import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  // input change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:9090/employee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password
        }),
      });

      if (response.ok) {
        alert("Signup successful!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: ""
        });
      } else {
        alert("Signup failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="signup-container" style={{backgroundColor:"#6f799a"}}>
      <div className="signup-card" style={{backgroundColor:"#6f799a"}}>
        <h2 className="signup-title">Create Your Account</h2>
        <p className="signup-subtitle">Join us today for exclusive features</p>
        
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group" style={{backgroundColor:"#6f799a"}}>
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name" 
              required 
            />
          </div>
          
          <div className="form-group" style={{backgroundColor:"#6f799a"}}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email" 
              required 
            />
          </div>

          {/* ✅ Phone Number field */}
          <div className="form-group" style={{backgroundColor:"#6f799a"}}>
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="text" 
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number" 
              required 
            />
          </div>
          
          <div className="form-group" style={{backgroundColor:"#6f799a"}}>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password" 
              required 
            />
          </div>
          
          <div className="form-group" style={{backgroundColor:"#6f799a"}}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
              type="password" 
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password" 
              required 
            />
          </div>
          
          <button type="submit" className="signup-button" style={{backgroundColor:"#6f799a"}}>Sign Up</button>
        </form>
        
        <div className="signup-footer">
          <p>Already have an account? <a href="/login">Log in</a></p>
          <div className="social-login">
            <button className="social-button google">Sign up with Google</button>
            <button className="social-button facebook">Sign up with Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
