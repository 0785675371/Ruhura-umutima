import React from 'react';
import './Dashboard.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import EarbudsIcon from '@mui/icons-material/Earbuds';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import title from './images/title.jpg';
import nyarugenge from './images/nyarugenge.jpg';
import butaro from './images/butaro.webp';
import faisal from './images/faisal-data.jpg';
import anna from './images/anna.jpg';
import fred from './images/fred.jpg';
import images from './images/images.jpg';
import pi from './images/appoint.png';
function sidebar() {
  return (
    <div className='all'>
<div className='side'>
    <div className='title'>
        <div className='home'>
        < HomeOutlinedIcon/>
        </div>
        <div>
        <h3 className='h3'>My Profile</h3>
        <div className='profile'>
         <img className='img' src={title} alt=''/>
         <div><div className='name'>Uwase karry</div><div className='icon'><KeyboardArrowDownOutlinedIcon/></div></div>
         <h4>premium member</h4>
          <AppRegistrationOutlinedIcon className='note'/>
          </div>
       </div>
    
      </div>
    <div className='list'>
    
        <li >
          <DashboardCustomizeOutlinedIcon className='icons'/>
          <span className='l1'>Dashboard</span>
          </li>
        <li>
          <PostAddOutlinedIcon className='icon2'/>
          <span  className='l2'> post story</span>
           </li>
        <li>
          <PersonSearchIcon className='icon3'/>
          <span  className='l3'> Appointment </span>
        </li>
        <li>
          <MedicalServicesOutlinedIcon className='icon4'/>
         <span  className='l4'>Medical report</span> 
          </li>
        <li>
          <EarbudsIcon className='icon5'/>
        <span  className='l5'> Doctor</span>
          </li>
        <li >
          <EventIcon className='icon6'/>
          <span className='l6'>Calendar</span>
          </li>
          <hr/>
        <li >
          <LogoutIcon className='icon7'/>
          <span className='l7'> Logout</span>
          </li>
          </div>
     </div>
    <div className='other'>
   <span className='test'>Medical test</span>
   <span className='soon'>The annual check is coming soon</span>
   <span className='tommor'>Tommorow,jan22,2022</span>
   <div className='add'><span className='col'>+Add to calendar</span></div>
   <div className='otherside'>
    <img src={pi} alt=''/>
   </div>
    </div>
    <div className='search'>
      <SearchIcon className='icon8'/>
      <input type="text" placeholder="Search for clinic,doctors,medecine,etc.." />
</div>
    <div className='notification'>
    <NotificationsOutlinedIcon className='noti'/>
    </div>
    <div className='down'>
      <span className='head'>Visit the clinics </span>
      <div className='butaro'>
     <img className='img1' src={butaro} alt=''/>
     <span className='but'>Butaro clinic</span>
     <span className='start1'>
      start
     </span>
      </div>
      <div className='nyarugenge'>
      <img className='img2' src={nyarugenge} alt=''/>
      <span className='nyaru'>Nyarugenge clinic</span>
      <span className='start2'>
      start
     </span>
      </div>
      <div className='faisal'>
      <img className='img3' src={faisal} alt=''/>
      <span className='FAI'>Kigali faisal clinic</span>
      <span className='start3'>
      start
     </span>
      </div>
    </div>
    <div className='down1'>
      <span className='head1'>Our psychologist </span>
      <div className='anne'>
     <img className='img1' src={anna} alt=''/>
     <span className='but'>Dr.Anna Freud</span>
     <span className='book1'>
      Book
     </span>
      </div>
      <div className='alfred'>
      <img className='img2' src={fred} alt=''/>
      <span className='fred'>Dr.Alfred Adler</span>
      <span className='book2'>
      Book
     </span>
      </div>
      <div className='mary'>
      <img className='img3' src={images} alt=''/>
      <span className='mar'>Dr.Mary Ainsworth</span>
      <span className='start3'>
      Book
     </span>
      </div>
    </div>
    </div>
  );
}

export default sidebar;
