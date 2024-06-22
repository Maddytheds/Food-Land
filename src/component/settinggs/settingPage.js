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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const localData = localStorage.getItem('token');
        if (localData) {
          const response = await axios.get(
            `http://localhost:8001/users/${localData}`
          );
          // console.log(response.data);
          setUserData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const localData = localStorage.getItem('token');
      await axios.put(`http://localhost:8001/users/${localData}`, userData);
    } catch (error) {
      console.log(error);
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
                  placeholder={userData.fullName}
                  onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder={userData.email}
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
                    placeholder={userData.password}
                    onChange={handleChange}
                  />
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder={userData.confirmPassword}
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
                placeholder={userData.addr}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit">Update Profile</button>
          </div>
        </form>
      </div>
    </>
  );
}
