import React from 'react';
import './About.css';
import logo from './Rlogo 1/Variant2.png';
import women from './Rlogo 1/woman.png';
import { Link } from 'react-router-dom';
function About() {
  return (
    <div className='about'>
     <div className='logo'>
      <img src={logo} alt=''/>
      <span className='tit'> UHURA UMUTIMA</span>
      
       </div>
       <div className='aa'>
      <ul>
      <li >
    <a href="/"> Home</a>
    </li>
<li>
    <Link to="/About">About us</Link>
    </li>
<li><Link to="/Contact">Contact us</Link> </li>

</ul>
</div>
       <div className='online'><span className='onl'>Online consultations</span> With <br/>a psychologist when and<br/> where convenient</div>
       <div className='how'>How Working With our<br/>psychologists will help <span className='good'>A good psychologist is able to identify situation that can<br/>be harmful to health and work.fortunately,many people turn<br/>to specialist in time.psychlogist help them cope with<br/>such situation so that negative emotions do not appear,<br/>work and family are saved,and one-time difficulties are<br/>forgotten</span></div>
       <div className='spec'><span className='a2'>200</span><span className='a3'><br/>specialist in our <br/>team</span></div>
       <div className='speci'><span className='a2'>1920</span><span className='a3'><br/>clients found their specialist <br/>team</span></div>
       <div className='specia'>8 years</div>
       <div className='women'>
        <span className='ave'>Average work experience<br/> of our specialist</span>
        <img src={women} alt=''/>
       </div>
       </div>
  );
}

export default About;
