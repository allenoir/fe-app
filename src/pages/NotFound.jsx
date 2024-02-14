import React from 'react';
import Navbar from '../components/landing/Navbar'
import notFound from '../assets/images/notFound.svg';
import '../assets/styles/landing.css'; // Anda dapat membuat file CSS terpisah untuk styling

const NotFound = () => {
  return (
    <section className='section1'>
    <Navbar />

    <div className="split-layout reverse notfound">
<div className="image-container">
  <img src={notFound} alt="" />
</div>
<div className="text-container">
    <h1>
    Ooops! <br />
    Page Not Found
    </h1>
    <p>
    This page doesn`t exist or was removed 
We suggest you back to home
    </p>
    <button>
    Home
    </button>
</div>
</div>
    </section>
    );
  }
  
  export default NotFound;
  