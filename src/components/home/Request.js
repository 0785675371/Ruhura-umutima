import React from 'react';
import './request.css';
import logo from './Rlogo 1/Variant2.png';
import doc from './Rlogo 1/Doctor.png';
function request() {
  return (
    <div className='app'>
      <div className='log'>
<img src={logo} alt=''/>
<span className='umu'>UHURA UMUTIMA</span>
      </div>
      <div className='doc'>
      <img src={doc} alt=''/>
      <h1 className='re'>Requesting appointment<br/>with a psychologist</h1>
      <span className='easy'>Easy way to make an<br/>appointment with a doctor</span>
      <div className='btn'>
      <submit >Let's get started</submit>
      </div>
      </div>
    </div>
  );
}

export default request;
