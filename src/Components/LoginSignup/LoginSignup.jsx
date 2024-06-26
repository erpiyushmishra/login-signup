import React, { useState } from 'react'
import './LoginSignup.css'
import person_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {
    
    const [action,setAction] = useState('SignUp');


  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==='LogIn'?<div></div>:<div className="input">
                <img src={person_icon} alt="" />
                <input type="text" placeholder="Name" />
            </div>}
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="text" placeholder="Email" />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="text" placeholder="Password" />
            </div>
        </div>
        {action==='SignUp'?<div></div>:<div className="forgot_password">Forgot Password? <span>Click Here!</span></div>}
        
        
        <div className="submit">
            <div className={action==='LogIn'?'SignUp gray':'SignUp'} onClick={()=>{setAction('SignUp')}}>SignUp</div>
            <div className={action==='SignUp'?'LogIn gray':'LogIn'} onClick={()=>{setAction('LogIn')}}>LogIn</div>
        </div>
    </div>
  )
}

export default LoginSignup