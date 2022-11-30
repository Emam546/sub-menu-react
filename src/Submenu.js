import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const MiniSubMenu = ({ parent, links, page }) => {
    const [submenu, setSubmenu] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        if (!parent.current) return;
        if (!ref.current) return;
        function update(){
          const tempBtn = parent.current.getBoundingClientRect();
          const center = (tempBtn.left + tempBtn.right) / 2;
          const bottom = tempBtn.bottom - 3;
          ref.current.style.top = `${bottom}px`;
          ref.current.style.left = `${center}px`;
        }
        update()
        const timeouts = [
            parent.current.addEventListener("mouseover", () => {
                setSubmenu(true);
            }),
            parent.current.addEventListener("mouseout", () => {
                setSubmenu(false);
            }),
            window.addEventListener("resize",update),
        ];

        return () => {
            timeouts.forEach((timeout) => {
                clearTimeout(timeout);
            });
        };
    }, [parent, ref]);
    return (
        <aside ref={ref} className={`submenu ${submenu && "show"}`}>
            <h4>{page}</h4>
            <div className={`submenu-center col-2`}>
                {links.map(({ label, icon, url }, index) => {
                    console.log(url);
                    return (
                        <a href={url} key={index}>
                            {icon}
                            {label}
                        </a>
                    );
                })}
            </div>
        </aside>
    );
};

export function _SubMenu() {
    const { subMenus } = useGlobalContext();
    return (
        <>
            {subMenus.map((data, index) => {
                return <MiniSubMenu key={index} {...data} />;
            })}
        </>
    );
}
export default function SubMenu(){
    const ref = useRef(null);
    const { subMenus } = useGlobalContext();
    const [submenu, setSubmenu] = useState(false);
    const [data,setData]=useState({links:[],page:""})
    useEffect(() => {
      if (!ref.current) return;
      const timeouts=[] 
      subMenus.forEach(({parent,links,page})=>{
        if (!parent.current) return;
        timeouts.push(
            parent.current.addEventListener("mouseover", () => {
              const tempBtn = parent.current.getBoundingClientRect();
                const center = (tempBtn.left + tempBtn.right) / 2;
                const bottom = tempBtn.bottom - 3;
                ref.current.style.top = `${bottom}px`;
                ref.current.style.left = `${center}px`;
                setSubmenu(true);
                setData({links,page})
            }),
            // parent.current.addEventListener("mouseout", () => {
            //     setSubmenu(false);
            // })
        );
      })

      return () => {
          timeouts.forEach((timeout) => {
              clearTimeout(timeout);
          });
      };
  }, [subMenus, ref]);
    useEffect(()=>{
      const navBar=document.getElementsByClassName("nav")[0]
      navBar.addEventListener("mouseover",(e)=>{
        if(!e.target.classList.contains("link-btn"))
          setSubmenu(false)  
      })
    },[])
    const {page,links}=data
    return <aside ref={ref} className={`submenu ${submenu && "show"}`}>
          <h4>{page}</h4>
          <div className={`submenu-center col-2`}>
              {links.map(({ label, icon, url }, index) => {
                  console.log(url);
                  return (
                      <a href={url} key={index}>
                          {icon}
                          {label}
                      </a>
                  );
              })}
          </div>
      </aside>
}
