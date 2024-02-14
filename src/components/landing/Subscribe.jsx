import React from 'react';
import '../../assets/styles/landing.css'; // Anda dapat membuat file CSS terpisah untuk styling

const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <div className="subscribe-content">
        <div className="subscribe-left">
          <h1>Subscribe Now for Get Special Features!</h1>
          <p>Let's subscribe with us and find the fun.</p>
        </div>
        <div className="subscribe-right">
          <button className="subscribe-button">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
