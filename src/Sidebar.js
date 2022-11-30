import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'

const Sidebar = () => {
  const {setSideBar,sidebar}=useGlobalContext()

  return <div className={`sidebar-wrapper ${sidebar&&"show"}`}>
    <div className='sidebar'>
      <button className='close-btn' onClick={()=>setSideBar(false)}>
        <FaTimes/>
      </button>
      <div className='sidebar-links'>
        {
          sublinks.map(({page,links},index)=>{
            return <article key={index}>
              <h4>{page}</h4>
            <div className='sidebar-sublinks'>
              {links.map(({icon,label,url},index)=>{
                  return <a href={url} key={index}>
                    {icon}
                    {label}
                  </a>
              })}
            </div>
            </article>
          })
        }
      </div>
    </div>
  </div>
}

export default Sidebar
