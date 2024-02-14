import React from 'react';
import Navbar from '../components/landing/Navbar'
import Hero from '../assets/images/hero.svg';
import Card1 from '../assets/images/card1.svg';
import Card2 from '../assets/images/card2.svg';
import Card3 from '../assets/images/card3.svg';
import Card4 from '../assets/images/card4.svg';
import Overview1 from '../assets/images/overview1.svg';
import Overview2 from '../assets/images/overview2.svg';
import Overview3 from '../assets/images/overview3.svg';
import Subscribe from '../components/landing/Subscribe';
import Pricing from '../components/landing/Pricing';
import '../assets/styles/landing.css'; // Anda dapat membuat file CSS terpisah untuk styling
import { RiCheckboxCircleLine } from 'react-icons/ri';

const Home = () => {
  return (
    <div>
      <section className='section1'>
      <Navbar />

      <div className="split-layout reverse hero">
        <div className="image-container">
          <img src={Hero} alt="" />
            </div>
            <div className="text-container">
            <h1>
          Observe Your Power
          </h1>
          <p>
                Trafalgar provides progressive, and affordable healthcare, accessible on 
          mobile and online for everyone
                </p>
                <button>
                See a Demo
                </button>
       </div>

       
</div>
<div className='part-title'>
<div className='part-text'>
  <h2>Why choose us?</h2>
<p>We provide to you the best choiches for you. The leading <br />
political campaign intelligence platform</p>
</div>
<div class="card-container">
  <div class="card">
    <h1>Data</h1>
    <p>The biggest regional data, development, and POI data.</p>
  </div>
  <div class="card">
    <h1>Technology</h1>
    <p>Geospatial platform with advanced analysis that suit your neetds.</p>
  </div>
  <div class="card">
    <h1>Service</h1>
    <p>An expert team help you to analyze your poltical power.</p>
  </div>
</div>
<button class="learn-more">Learn More</button>
</div>




      
      </section>
      <section className='section2'>
      <div className="overview split-layout">
        <div className="image-container">
          <img src={Overview1} alt="" />
            </div>
            <div className="text-container">
            <h1>
            App Overview 1
          </h1>
          <p>
          Advanced spatial analysis to understand where and why <br />things happen, identify the target constituency, and optimize <br />
           the campaign. 
                </p>
                <button>
                See a Demo
                </button>
       </div>
       </div>
       <div className="overview split-layout reverse">
        <div className="image-container">
          <img src={Overview2} alt="" />
            </div>
            <div className="text-container">
            <h1>
            App Overview 2
          </h1>
          <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor <br /> do amet sint. Velit officia consequat duis enim velit mollit. <br /> Exercitation veniam consequat sunt nostrud amet.
                </p>
                <button>
                See a Demo
                </button>
       </div>
       </div>
       <div className="overview split-layout">
        <div className="image-container">
          <img src={Overview3} alt="" />
            </div>
            <div className="text-container">
            <h1>
            App Overview 3
          </h1>
          <p>
          Advanced spatial analysis to understand where and why <br /> things happen, identify the target constituency, and optimize <br />the campaign. 
                </p>
                <button>
                See a Demo
                </button>
       </div>
       </div>

      </section>

      <section className='section3'>

      <div className='part-title'>
            <div className='part-text'>
              <h2>How it works for you?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed <br /> do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Ut enim ad minim veniam.</p>
            <button class="">Learn More</button>
              </div>
              <div class="card-container2">
                <div class="card">
                <img src={Card1} alt="/" />
                  <h1>Geographic Segmentation</h1>
                  <p>Consist of creating differend groups of
              customers based on geographic
              boundaries1</p>
                </div>
              <div class="card">
            <img src={Card2} alt="/" />
              <h1>Demographic Segmentation</h1>
              <p>Consist of dividing the market through different variables such as age, gender, income, etc</p>
            </div>
            <div class="card">
            <img src={Card3} alt="/" />
              <h1>Psychograpich Segmentation</h1>
              <p>Consist of creating differend groups of
          customers based on geographic
                boundaries</p>
                </div>
                <div class="card">
                <img src={Card4} alt="/" />
                  <h1>Behavorial Segmentation</h1>
                  <p>Consist of creating differend groups of
              customers based on geographic
              boundaries</p>
  </div>
</div>
</div>


<div>
<div className='part-titlep'>
  <h2>Plans and Pricing</h2>
<p>We provide to you the best choiches for you. The leading <br />
political campaign intelligence platform</p>
</div>
</div>

<Pricing />

<Subscribe />





  


      </section>
      
   



    </div>
  );
}

export default Home;
