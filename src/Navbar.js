import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import data from "./data"
import { useGlobalContext } from './context'
import { useRef } from 'react'
import { useEffect } from 'react'
function Button({page,links}){
  const {setSubMenus}=useGlobalContext()
  const button=useRef(null)
  useEffect(()=>{
    setSubMenus((preSub)=>{
      return [...preSub,{parent:button,links,page}]
    })
  },[])
  
  return <li>
    <button className='link-btn' ref={button}>{page}</button>
  </li>
}
const Navbar = () => {
  const {setSideBar}=useGlobalContext()
  
  return <div className='nav'>
      <div className='nav-center'>
          <div className='nav-header'>
            <img src={logo} className="nav-logo" alt={logo}/>
            <button className='btn toggle-btn' onClick={()=>setSideBar(true)}>
              <FaBars/>
            </button>
          </div>
          <ul className='nav-links'>
            {
              data.map((data,i)=>{
                return <Button {...data} key={i}/>
              })
            }
          </ul>
          <button className='btn signin-btn'>sign in</button>
      </div>
  </div>
}

export default Navbar
