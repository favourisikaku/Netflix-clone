import React, { useEffect, useState } from 'react'
import logo from '../Netflix-logo.png'
import avatar from '../Netflix-avatar.png'

const Nav = () => {

  const [show, handleShow] = useState(false)

   useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100){
        handleShow(true)
      }else{
        handleShow(false)
      }
    });
    return () => {
      window.removeEventListener('scroll', null)
    }
   }, [])

  return (
    <div className={`nav-header ${show && 'nav-black'}`}>
      <img  className='logo' src={logo}/>
      <img className='avatar' src={avatar}/>
    </div>
  )
}

export default Nav