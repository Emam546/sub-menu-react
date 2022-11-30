import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenus from './Submenu'
import { AppProvider } from './context'

function App() {

  return (
    <>
      <AppProvider>
        <Navbar/>
        <Sidebar/>
        <Hero/>
        <Submenus/>
      </AppProvider>
    </>
  )
}

export default App
