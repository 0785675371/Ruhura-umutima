import React from 'react'
import './contact.css'
import image from './pic/image1 .png'
function contact() {
  return (
    <div className='all'>
<div className='photo'>
  <img src={image} alt=''/>
</div>
<div className='otherp'>
  <span className='cont'>CONTACT US</span>
  <div className='on'>
    <form>
    <div className='text2'>
      <label>Full Name</label>
    <input className='input'type="text"  />
    </div>
    <div className='email1'>
      <label>Email</label>
    <input className='input'type="text" />
    </div>
    <div className='mess'>
  Message<br />
  <textarea name="more" rows="8" cols="30">
  </textarea><br/>
<div className="done">
  <input className='sub' type="submit" value="Call us" />
</div>
</div>
    </form>
  </div>
</div>
    </div>
  )
}

export default contact
