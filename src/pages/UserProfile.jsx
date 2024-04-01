/*import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/Avatar.jpg'
import {FaEdit} from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'

const UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={'/myPosts/sdfsdf'} className='btn'>My posts</Link>
        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={avatar} alt="" />
            </div>
            <form className="avatar__form">
              <input type="file" name='avatar' id='avatar' onChange={e => setAvatar(e.target.files[0])} accept='png, jpg, jpeg'/>
              <label htmlFor="avatar"><FaEdit/></label>
            </form>
            <button className='profile__avatar-btn'><FaCheck/></button>
          </div>
          <h1>User</h1>

          <form className="form profile__form">
            <p className="form__error-message">This is an error message</p>
            <input type="text" placeholder='Full Name' value={name} onChange={e => setName(e.target.value)}/>
            <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder='Current Password' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)}/>
            <input type="password" placeholder='New Password' value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
            <input type="password" placeholder='Confirm new password' value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)}/>
            <button type='submit' className='btn-primary'>Update details</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserProfile*/

//THIS IS THE ABOUT SECTION WITH THE NAME USER_PROFILE. THIS IS ACTUALLY ABOUT SECTION

import React from 'react';
import profilePicture from '../images/about_IR.jpg';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="user-profile__header">
        <img src={profilePicture} alt="Profile" className="user-profile__picture" />
        <h1 className="user-profile__title">About Us</h1>
      </div>
      <div className="user-profile__content">
        <p className="user-profile__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium sapien ac leo hendrerit, at congue elit efficitur. Vivamus eget mauris id ligula vestibulum feugiat.
        </p>
        <p className="user-profile__description">
          Nam eget odio nec ex consequat lacinia. Sed nec ullamcorper eros. Donec euismod risus ut turpis rhoncus, sit amet varius libero feugiat.
        </p>
      </div>
    </div>
  );
}

export default UserProfile;