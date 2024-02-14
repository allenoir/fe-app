import React from 'react';
import Header from '../components/dashboard/Header';
import Sidebar from '../components/dashboard/Sidebar';
import { Outlet } from 'react-router-dom'; // Import Outlet
import '../assets/styles/dashboard.css'

function Dashboard() {
  return (
    <div className='grid-container'>
      <Header />
      <Sidebar />
      <Outlet /> {/* Menampilkan rute child di sini */}
    </div>
  );
}

export default Dashboard;
