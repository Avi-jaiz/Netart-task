import React from 'react';
import '../styles/footer.css';
import {BsTelephoneFill,BsFacebook} from 'react-icons/bs';
import {BsGlobe2} from "react-icons/bs"

function Footer() {
  return (
    <div className='footer'>
        <div className='contact'>
        <div className='tele-icon'><BsTelephoneFill className='telephone'/>
        </div>
        <h4>Toll Free 1800 200 1234</h4>
        </div>


        <div className='social-media'>

<div className='icon-facebook'><BsFacebook className='facebook'/>
        </div>
        <h4><a href='www.facebook.com/cripumps<'>www.facebook.com/cripumps</a></h4>
        </div>

        <div className='social-media'>

<div className='icon-facebook'><BsGlobe2 className='facebook'/>
        </div>
        <h4><a>www.crigroups.com</a></h4>
        </div>
        </div>

  )
}

export default Footer