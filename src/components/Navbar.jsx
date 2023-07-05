import { useState } from 'react';
import '../style/navbar.css'
function Navbar() {
    let[drop,setdrop]=useState(false)
    return(
       <nav>
        <div id="logo">
        <i className='bx bxs-bowl-hot'></i>

        </div>
        <div id="habergher" onClick={()=>{setdrop(!drop)}}>
        {drop==true?<i class='bx bx-menu-alt-left'></i>:
        <i className='bx bx-menu' ></i>}
        </div>
        { drop && <div id="dropdown">
            <ul>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact us</a></li>
                <li><a href="">Know More</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">About Us</a></li>

                
            </ul>
        </div>}
       </nav>
    )
}
export default  Navbar;