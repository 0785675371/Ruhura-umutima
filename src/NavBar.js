import React from 'react';
import './nav.css';
import logo from './components/home/Rlogo 1/Variant2.png';
import { Link } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
export default function NavBar() {
  return (
    <div className='all'>
        
    < div className= "imgs">
    < span className="logo1"> <div className='logo'>
      <img src={logo} alt=''/>
      <span className='tit1'> UHURA UMUTIMA</span>
       </div></span>
    <nav className='nav'>
        <a href='/' className='site-title'>
        </a>
        <ul>
<li >
    <a href="/"> Home</a>
    </li>
<li>
    <Link to="/About">About us</Link>
    </li>
<li><Link to="/Contact">Contact us</Link> </li>

</ul>
</nav>
<div className= "htm1"><h1 className='h1'>"Mental health...is not a <br/>destination,but a process."</h1></div>

<div className= "riqueste"> 
 <Link to ='/requesting'>Requesting appointment</Link>
 <EastIcon className='direc'/></div>
</div>
<div className='signin'>
    
    <div className='signup'>
        <EastIcon className='dire'/>
    <li className='signi'><Link to="/Signup" >Sign Up</Link> </li>
    </div>
    <form>
    <span className='sign'>Sign In</span>
    <div className='text'>
    <input className='input'type="text" placeholder='Username' />
    </div>
    <div className='pass'>
    <input className='input' type="password"  placeholder='password'/>
    </div>
    <div className='forget'>Forget Your Password? <a href=''>  Reset It Now</a></div>
    <div className='butt'>
    <button className='submit1'><li className='active'><Link to="/Login">Login</Link></li></button>
    </div>
    </form>
</div>
</div>
  );
  }
