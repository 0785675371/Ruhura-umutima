import React from 'react';
import './Form.css'
import pic1 from './pic1.png';
function Form() {
  return (
    <div className='Form'>
          <div className='ima'>
<img src={pic1} alt=''/>
          </div>
      <div className='othersi'>
  
        <form>
 
        <span className='sign1'>Sign up</span>
    <div className='text1'>
      <label>Name</label>
    <input className='input'type="text"  />
    </div>
    <div className='email'>
      <label>Email Address</label>
    <input className='input'type="text" />
    </div>
    <div className='password'>
    <label>Password</label>
    <input className='input' type="password"/>
    </div>
    <div className='password1'>
    <label>Comform Password</label>
    <input className='input' type="password"/>
    </div>
    <div className='button'>
    <button className='submit2'><li className='create' >Create Account</li></button>
    </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
