import React from 'react'
import logo from '../../content/images/tolkien.jpg'
import './Greet.scss'

const Greet = (props) => {
  const {name} = props

  return (
    <div className='average'>
      <div className='logo-container'>
        <img className='logo-img' src={logo} alt="logo" />
      </div>
      <h2 className='title'>Hello {name}!!</h2>
      <p>Refresh if you want to be another cool Valar</p>
    </div>
  )
}  

export default Greet