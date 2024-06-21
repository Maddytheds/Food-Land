import './settingPage.css';
import React from 'react';

export default function SettingPage() {
  return (
    <>
      <div className="settingsContainer">
        <div className="settingsHeading">
          <img src="/settingImg.png" alt="" />
          <h1>Settings</h1>
        </div>
        <form action="">
          <div className="updateForm">
            <div className="h1Settings">
              <h1>Settings</h1>
              <i class="fa-solid fa-gear"></i>
            </div>
            <div className="updateDataDiv">
              <div className="updateData">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div>
                <div className="updateData">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" />
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                  />
                </div>
              </div>
            </div>
            <div className="updateAddr">
              <label htmlFor="addr">Address</label>
              <textarea name="addr" id="addr" cols="30" rows="10"></textarea>
            </div>
            <button>Update Profile</button>
          </div>
        </form>
      </div>
    </>
  );
}
