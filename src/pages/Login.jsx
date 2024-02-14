import React from 'react';
import logo from '../assets/images/logo.svg';
import login from '../assets/images/login.svg';
import '../assets/styles/landing.css'; // Anda dapat membuat file CSS terpisah untuk styling
import LoginForm from '../components/auth/Loginform';
const Login = () => {
  return (
    <div className='grid-container2'>
            <aside id="loginbar">
      <div className='loginbar-title'>
        <div className='loginbar-brand'>
          <img src={logo} className='icon-header'/>
          <span className="loginbar-header">Logoipsum</span>
        </div> 
        </div>
        <div className="loginbar-info">
          <img src={login} alt="" />
          <div className='part-titleh'>
  <h2>Services</h2>
<p>An expert team help you to analyze your polticalt <br />power.An expert team .</p>
<p className='copyright'>©2020 All Rights Reserved. PT Indonesia Indicator</p>
</div>
        </div>
        
        </aside>

    
      <LoginForm className="form-container"/>




    </div>
    );
  }
  
  export default Login;
  