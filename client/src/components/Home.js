import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as MHLogo } from '../assets/MHLogo.svg'

import './Home.style.css';

const Home = ({ socket }) => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('userName', userName)
    //sends the username and socket ID to the Node.js server
    socket.emit('newUser', { userName, socketID: socket.id })
    navigate('/questionaire')
  }

  return (
    <div>
      <form className="home__container" onSubmit={handleSubmit}>
        <div className='home__header__container'>
          <p className="home__header">Welcom to</p>
          <label className="home__label">WellBeeing</label>
          <MHLogo />
          <p className='prj__name'>A platform connecting communities for people facing mental health challenges</p>
        </div>

        {/* <label htmlFor="username">Username</label>
        <input
          type="text"
          minLength={6}
          name="username"
          id="username"
          className="username__input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        /> */}
        <button className="home__cta">Get started</button>
      </form>

    </div>


  )
}

export default Home
