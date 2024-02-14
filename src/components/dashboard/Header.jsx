import React, { useState } from 'react';
import {BsJustify} from 'react-icons/bs'
import {MdSubject} from 'react-icons/md'
import { FiMoon,FiUser} from 'react-icons/fi'
import { FaAngleDown } from 'react-icons/fa'
import { FaRegCircleUser } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";
import { NavLink } from 'react-router-dom';


function Header({OpenSidebar}) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <MdSubject  className='icon'/>
        </div>
        <div className='header-right dropdown'>
        <FiMoon />
        <div className='profile' onClick={() => setShowMenu(!showMenu)}>
      <FiUser className='profile-image' />
      <span className='profile-name'>User. Inc</span>
      <div className="action-buttons">
                      <button className="dropdown-btn"><FaAngleDown size={16} /></button>
                      <div className="dropdown-content">
                        <NavLink to="/dashboard/"><button ><FaRegCircleUser size={16} /> Profile </button></NavLink>
                        <NavLink to="/"><button ><TbLogout2 size={16} /> Sign Out</button></NavLink>
                      </div>
                    </div>
    </div>
        </div>
    </header>
  )
}

export default Header