import React, {useState ,useEffect} from 'react'
import { Link } from 'react-router-dom' ;

import './Navbar.css';
import {Button} from './Button';
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] =useState(true)
    const handleClick = () => setClick(!click);
    const closeMobileMenu =() =>setClick(false)

    const showButton = () => {
        if(window.innerwidth <= 960)
        {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() =>
    {
        showButton()
    }, []);
    window.addEventListener('resize',showButton);
    return (
      
         <>
         <nav className="navbar">
             <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
COOL-ESTATES
 
 
 <i className='fab.fa-typo3' />

  
</Link>
<div className='menu-icon'  onClick={handleClick}>
    <i className={click ? 'fas fa-times': 'fas fa-bars'} />
             </div>
             <ul className={click ?  'nav-menu-active' : 'nav-menu'} >
             
            <li className='nav-item'>
                <Link to='/SIGN-UP' className ='nav-links-mobile' onClick={closeMobileMenu}> SIGN-UP </Link>
            </li>
            <li className='nav-item'>
                <Link to='/MYACCOUNT' className ='nav-links' onClick={closeMobileMenu}> MYACCOUNT</Link>
            </li>
            <li className='nav-item'>
                <Link to='/MY HOME' className ='nav-links' onClick={closeMobileMenu}>MY HOME </Link>
            </li>
            <li className='nav-item'>
                <Link to='/BUYER' className ='nav-links' onClick={closeMobileMenu}> BUYER </Link>
            </li>
            <li className='nav-item'>
                <Link to='/SELLER' className ='nav-links' onClick={closeMobileMenu}> SELLER</Link>
            </li>
            <li className='nav-item'>
                <Link to='/RENT' className ='nav-links' onClick={closeMobileMenu}> RENT </Link>
            </li>
            <li className='nav-item'>
                <Link to='/HOMELOANS' className ='nav-links' onClick={closeMobileMenu}> HOMELOANS</Link>
            </li>
            <li className='nav-item'>
                <Link to='/FIND A REALTORS' className ='nav-links' onClick={closeMobileMenu}> FIND A REALTORS</Link>
            </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'> SIGN-UP</Button>}
             </div>
         </nav>
         </>
    
     
    );
}

export default Navbar
