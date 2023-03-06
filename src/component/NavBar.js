import React from 'react';
import '../style/App.css';

function NavBar() {
  return (
    <div className="navBarContainer">
        <nav className='mainNav'>
            <h1 className='logo'>LOGO</h1>
            <div className='btn'>
                <ul>
                    <li><a href=''>LOGIN</a></li>
                    <li><a href=''>REGISTER</a></li>
                    

                </ul>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
