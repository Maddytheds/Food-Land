import './settingPage.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SettingPage() {
  const [userData, setUserData] = useState({
    id: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    addr: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('token');
        const response = await axios.get(
          `http://localhost:8001/users/${userId}`
        );
        setUserData(response.data);
      } catch (error) {
        console.log('Error fetching user data:', error);
        setError('Failed to load user data.');
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem('token');
      await axios.put(`http://localhost:8001/users/${userId}`, userData);
      setSuccess('Profile updated successfully!');
      setError('');
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('Failed to update profile.');
      setSuccess('');
    }
  };

  return (
    <>
      <div className="settingsContainer">
        <div className="settingsHeading">
          <img src="/settingImg.png" alt="" />
          <h1>Settings</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="updateForm">
            <div className="h1Settings">
              <h1>Settings</h1>
              <i className="fa-solid fa-gear"></i>
            </div>
            <div className="updateDataDiv">
              <div className="updateData">
                <label htmlFor="fullName">Name</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={userData.fullName}
                  onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <div className="updateData">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={userData.password}
                    onChange={handleChange}
                  />
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={userData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="updateAddr">
              <label htmlFor="addr">Address</label>
              <textarea
                name="addr"
                id="addr"
                cols="30"
                rows="10"
                value={userData.addr}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit">Update Profile</button>
          </div>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </div>
    </>
  );
}
