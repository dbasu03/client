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
        <h1 className="user-profile__title">Politika - by Department of International Relations, Jadavpur University</h1>
      </div>
      <div className="user-profile__content">
        <p className="user-profile__description">
        The Department of International Relations at Jadavpur University is a unique establishment in eastern India, founded in 1956. It is located at the main campus of the university and focuses on various aspects of national and international politics, with a primary emphasis on strategic and economic matters. The department offers undergraduate, postgraduate, and M.Phil. programs, with faculty members engaged in teaching and research on topics like internal and external security concerns of India and South Asia, bilateral relations, foreign policy, ethnicity, society, human rights, and environmental issues. Additionally, the department has a Centre for Refugee Studies and offers degrees in Political Science and International Relations at both the B.A. and M.A. levels. The faculty members specialize in diverse areas such as International Relations theory, security, peace, conflict, Indian Foreign Policy, South Asian Politics, and more. 
        </p>
        <p className="user-profile__description">
        The School of International Relations and Strategic Studies at Jadavpur University, established in 1987, promotes interdisciplinary programs of advanced study and research. It aims to provide a platform for scholars to collaborate on multi-disciplinary issues that cannot be addressed within a single department. The School organizes lectures, seminars, workshops, and sponsors studies on specific areas and issues. Noteworthy figures associated with the School include Lt. General Ashok K. Chaudhuri, General Sankar Roychowdhury, and various professors from different universities who have delivered lectures on a range of topics. Ongoing research projects at the School cover areas like India's Foreign Trade Policy, WTO, and the Print Media
        </p>
      </div>
    </div>
  );
}

export default UserProfile;