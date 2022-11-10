import React from 'react'
import '../assets/css/style.css'

function SingUp() {
    return(
        <div className='container'>
            <p className='header-clss'>Try it free 7 dats the $20/mo. thereafter</p>
            <form>
            <div className='form-input'>
                <input type="text" className='input-clss' placeholder='First Name'/>
            </div>
            <div className='form-input'>
                <input type="text" className='input-clss' placeholder='Last Name'/>
            </div>
            <div className='form-input'>
                <input type="email" className='input-clss' placeholder='Email'/>
            </div>
            <div className='form-input'>
                <input type="password" className='input-clss' placeholder='password'/>
            </div>
                <button className='btn'>CLAIM YOUR FREE TRIAL</button>
                <p className='as'>By checking the button your one</p>
            </form>
        </div>
    );
}

export default SingUp;