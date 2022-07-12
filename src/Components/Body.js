import React from 'react';
import award_pic from '../files/award_pic.png'
import award_receive from '../files/award_receive.png';


import '../styles/body.css'
import Products from './Products';

function Body() {
  return (

    <div className='container'>
    <div className='body'>

<div className='award-div'>
    <img src={award_pic} alt='award' className='award-pic'/>


    
</div>


<div className='body-content'>
    <h4 className='content-head'>C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 FRO THE 4th time.</h4>
    <ul>
        <li>C.R.I's energy efficient products are well recognized by varius Government Institutions, as trustworthy products for various projects across the global to save energy </li>
        <li>
            C.R.I is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 star rated energy efficient smart pumps with IoT enabled control panel.
        </li>
    </ul>
    <div className='award-receive'>
        <img src={award_receive} alt='receive' className='receive-pic'/>

    </div>

    <div className='award-receive-content'>
<p className='content-head'>
Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha &amp; Shri. Raj Kumar Singh, Honorable Minister of State.
</p>
    </div>
    

</div>






    
</div>
<Products />


</div>
    
  )
}

export default Body;