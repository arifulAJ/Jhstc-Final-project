import React from 'react';

import './FirstNav.css';
const FirstNav = () => {
    return (
        <div className=' topNav py-3 justify-content-around'>
         
          <div className='hoverEffect'>
          <i class="fa-solid fa-location-dot">
               
                
               </i>
               <span> 
                 <a href="https://goo.gl/maps/Td3jbU46wfhKUNec8">
                 Nolisapara, Kazipur Road, Sirajganj ,Bangladesh
                 </a>
                 </span>
          </div>

             <div>
             <i class="fa-solid fa-envelope"></i>
             <span>
                <a href="mailto:jhstc2015@gmail.com">
                jhstc2015@gmail.com
                </a>
             </span>
             </div>
             <div>
             <i class="fa-solid fa-phone"></i>
             <span> <a href="tel:+880152130333">+880152130333 </a></span>
             </div>
             <div>
             <i class="fa-solid fa-user"></i> 
             <span>login</span>
          </div>   
         
        </div>
    );
}

export default FirstNav;
