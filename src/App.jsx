import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import DashboardHome from './components/dashboard/DahboardHome'; // Import komponen Home
import UserManagement from './components/dashboard/UserManagement'; // Import komponen UserManagement
import NotFound from './pages/NotFound';
import Charts from './components/dashboard/Charts';
import Login from './pages/Login';
import About from './pages/About';

const route = createBrowserRouter([
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      { path: '/dashboard/', element: <DashboardHome /> }, // Menyesuaikan path child untuk Home
      { path: '/dashboard/user-management', element: <UserManagement /> }, // Menyesuaikan path child untuk UserManagement
      { path: '/dashboard/charts', element: <Charts /> }, // Menyesuaikan path child untuk Home
    ]
  },
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/about',
    element: <About />,
  }
]);

const App = () => {
  return (
    <RouterProvider router={route} />
  );
}

export default App;
