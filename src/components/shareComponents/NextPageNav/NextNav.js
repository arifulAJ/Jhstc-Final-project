import React from 'react'
import { Link } from 'react-router-dom'
import './NextNav.css'
export default function NextNav() {
  return (
    <div className=' NextNav py-3 justify-content-around'>
       <div>
       <Link to="/home"><i class="fa-solid fa-house"></i>Home</Link>
        </div>   
    <div className='hoverEffect'>
    <i class="fa-solid fa-location-dot">
         
          
         </i>
         <span> 
           <a href="https://goo.gl/maps/Td3jbU46wfhKUNec8">
           Nolisapara, Sirajganj ,Bangladesh
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
      
         
   
  </div>
  )
}
