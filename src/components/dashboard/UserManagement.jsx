import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { BsThreeDots } from 'react-icons/bs';
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(6);
  const [totalUsers, setTotalUsers] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility
  const [editingUser, setEditingUser] = useState(null); // State to store currently editing user
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    gender: ''
  });

  useEffect(() => {
    fetchData();
  }, [currentPage, searchQuery]);

  const fetchData = () => {
    const skip = (currentPage - 1) * usersPerPage;
    const url = searchQuery
      ? `https://dummyjson.com/users/search?q=${searchQuery}&limit=${usersPerPage}&skip=${skip}&select=firstName,lastName,username,email,gender,lastUpdate,image`
      : `https://dummyjson.com/users?limit=${usersPerPage}&skip=${skip}&select=firstName,lastName,username,email,gender,lastUpdate,image`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setUsers(data.users);
        setTotalUsers(data.total);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const addUser = (userData) => {
    fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      .then(newUser => {
        setUsers([...users, newUser]);
        toggleForm();
      });
  };

  const updateUser = (userId, updatedUserData) => {
    fetch(`https://dummyjson.com/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUserData)
    })
      .then(res => res.json())
      .then(updatedUser => {
        setUsers(users.map(user => (user.id === userId ? updatedUser : user)));
        toggleForm();
      });
  };

  const deleteUser = (userId) => {
    fetch(`https://dummyjson.com/users/${userId}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    setEditingUser(null); // Reset editing user when toggling form
    setFormData({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      gender: ''
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingUser) {
      updateUser(editingUser.id, formData);
    } else {
      addUser(formData);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      gender: user.gender
    });
    setShowForm(true);
  };

  const handleSearch = e => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const paginate = direction => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next' && currentPage * usersPerPage < totalUsers) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>USER MANAGEMENT</h3>
      </div>
      <div className="user-management">
        <div className="search-add">
          <div className='search'>
          <FiSearch className='icon'/>
          <input
            type="text"
            placeholder="Search User Management"
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
          />
          </div>

          <button onClick={toggleForm} className="add-user-btn">Add User</button>
        </div>
        <table className="user-table">
          <thead>
            <tr>
              <th style={{ width: '50px' }}>Avatar</th>
              <th style={{ width: '240px' }}>Name</th>
              <th style={{ width: '235px' }}>Username</th>
              <th style={{ width: '235px' }}>Email</th>
              <th style={{ width: '110px' }}>Gender</th>
              <th style={{ width: '150px' }}>Last Update</th>
              <th style={{ width: '110px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td><img src={user.image} alt="Avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} /></td>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.lastUpdate}</td>
                <td>
                  <div className="action-buttons">
                    <div className="dropdown">
                      <button className="dropdown-btn"><BsThreeDots size={16} /></button>
                      <div className="dropdown-content">
                        <button onClick={() => handleEdit(user)}><HiOutlinePencil size={16} /> Edit</button>
                        <button onClick={() => deleteUser(user.id)}><HiOutlineTrash size={16} /> Delete</button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <div className="pagination-text">
            {users.length > 0 ? (
              `Showing ${(currentPage - 1) * usersPerPage + 1} to ${
                (currentPage - 1) * usersPerPage + users.length
              } of ${totalUsers} Users`
            ) : (
              `No users found`
            )}
          </div>
          <div className="pagination-buttons">
            <button onClick={() => paginate('prev')} disabled={currentPage === 1}><FiChevronLeft /></button>
            <span>{currentPage}</span>
            <button onClick={() => paginate('next')} disabled={currentPage * usersPerPage >= totalUsers}><FiChevronRight /></button>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="form-container2">
        <IoCloseOutline onClick={toggleForm} className="close-button" />
        <h2>User Management</h2>
        <p>If you need more info, please check Project Guidelines</p>
          <form onSubmit={handleSubmit}>
            {/* Form fields */}
            <label for="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            <label for="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
            <label for="usermame">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
             <label for="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <div className='form-buttons'>
              <button type='button' className='cancel-button' onClick={toggleForm}>Cancel</button>
              <button type='submit' className='submit-button'>{editingUser ? 'Update' : 'Add'} User</button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
};

export default UserManagement;
