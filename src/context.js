import React, { useState, useContext } from 'react'
import sublinks from './data'
export const AppContext=React.createContext()
export function AppProvider({children}) {
    const [sidebar,setSideBar]=useState(false)
    const [subMenus,setSubMenus]=useState([])
    return <AppContext.Provider
    value={
        {sidebar,setSideBar,subMenus,setSubMenus}
        
    }>
        {children}
    </AppContext.Provider>
} 
export function useGlobalContext(){
    return useContext(AppContext)
}