import React from 'react'
import './SideBar.css'
import {motion} from 'framer-motion'
export default function SideBar(children) {
  return (
    <>
      <div className="sidebar-main-container">
        <motion.div className="sidebar" animate = {{with:"200px"}}></motion.div>
        <main>{children}</main>
      </div>
    </>
  )
}
