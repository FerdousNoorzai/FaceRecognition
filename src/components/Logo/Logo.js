import React from 'react'
import Tilt from 'react-parallax-tilt';
import './logo.css';
import logo from './mylogo.png';

export default function Logo() {
  return (
    <Tilt tiltAxis='x'>
      <div style={{ width: '150px',height: '150px', marginLeft:"2%"}} className='pluger'>
      <img src={logo} alt="our Logo" />
      </div>
    </Tilt>
  )
}
