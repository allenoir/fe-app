import React from 'react';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri'; // Import React Icon
import Pricingimg from '../../assets/images/pricing.svg';

function Pricing() {
  return (
    <div className="pricing-container">
      <div className="pricing-card satu">
        <div className="pricing-content">
        <img src={Pricingimg} alt="" />
          <h1>
          Individual Plan
          </h1>
          <ul className="pricing-list">

            <li>          <RiCheckboxBlankCircleLine className="check-icon" />1 User</li>
            <li>          <RiCheckboxBlankCircleLine className="check-icon" />1 Basic Analysis</li>
            <li>          <RiCheckboxBlankCircleLine className="check-icon" />Unlimited Select Services</li>
            <li> </li>
          </ul>
          <div className="pricing-price">
            <span className="price">$99</span> / mo
          </div>
          <button className="select-button">Select</button>
        </div>
      </div>
      <div className="pricing-card dua">
        <div className="pricing-content">
            <img src={Pricingimg} alt="" />

            <h1>
            Parties Plan
            </h1>
          <ul className="pricing-list">
            <li>          <RiCheckboxBlankCircleLine className="check-icon" />Unlimited User</li>
            <li>          <RiCheckboxBlankCircleLine className="check-icon" />Basic Analysis</li>
            <li>          <RiCheckboxBlankCircleLine className="check-icon" />Unlimited Select Services</li>
            <li>          <RiCheckboxBlankCircleLine className="check-icon" />Free extend 1 Month</li>
          </ul>
          <div className="pricing-price">
            <span className="price">$500</span> / mo
          </div>
          <button className="select-button">Select</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
