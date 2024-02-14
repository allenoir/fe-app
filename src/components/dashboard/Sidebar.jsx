import React from 'react'
import logo from '../../assets/images/logo.svg'
import { FiSlack, FiArchive, FiServer, FiDatabase, FiWifi, FiFigma, FiImage, FiUser, FiPocket, FiLayout } from 'react-icons/fi';
import { TbGauge } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';



const Sidebar = () => {
  return (
    <aside id="sidebar">
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <img src={logo} className='icon-header'/>
          <span className="title-header">Logoipsum</span>
        </div>
        <span className='icon close_icon'></span>
        </div>

        <div className='sidebar-list'>
            <div className='sidebar-list-item'>
                <NavLink to="/dashboard"><TbGauge className='icon'/>Dashboard</NavLink>
            </div>
            <div className='sidebar-list-item'>
                <NavLink to="/dashboard/user-management"><TbGauge className='icon'/>User Management</NavLink>
            </div>
            <div className='sidebar-list-item'>
            <span className='spacer'>DATA</span>
            </div>
            <div className='sidebar-list-item'>
                    <NavLink>
                            <FiSlack className='icon'/> Visualization
                    </NavLink>
            </div>
            <div className='sidebar-list-item'>
                    <NavLink>
                            <FiArchive className='icon'/> Case
                    </NavLink>
            </div>
            <div className='sidebar-list-item'>
                    <NavLink>
                            <FiServer className='icon'/> Data Set
                    </NavLink>
            </div>
            <div className='sidebar-list-item'>
                    <NavLink>
                            <FiDatabase className='icon'/> Data Source
                    </NavLink>
            </div>
            <div className='sidebar-list-item'>
                    <NavLink>
                            <FiWifi className='icon'/> Connection
                    </NavLink>
            </div>
            <div className='sidebar-list-item'>
            <span className='spacer'>ASSETS</span>
            </div>
            <div className='sidebar-list-item'>
                    <NavLink>
                            <FiFigma className='icon'/> Icon
                    </NavLink>
            </div>
            <div className='sidebar-list-item'>
                    <NavLink>
                            <FiImage className='icon'/> Image
                    </NavLink>
            </div>
            <div className='sidebar-list-item'>
            <span className='spacer'>AUTHORIZATION</span>
            </div>
            <div className='sidebar-list-item'>
                    <NavLink>
                            <FiUser className='icon'/> Account
                    </NavLink>
            </div>
            <div className='sidebar-list-item'>
                    <NavLink>
                            <FiPocket className='icon'/> Role
                    </NavLink>
            </div>
            <div className='sidebar-list-item'>
                    <NavLink>
                            <FiLayout className='icon'/> Work Space
                    </NavLink>
            </div>
        </div>
    </aside>
  );
}

export default Sidebar;