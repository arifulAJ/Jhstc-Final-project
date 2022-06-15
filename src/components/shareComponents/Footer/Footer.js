import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import './Footer.css'
export default function Footer() {
  return (
    <div>
  <ScrollToTop  color='#fff'
   style={{backgroundColor:"#9F1C22",
   
   borderRadius:"50%",
   
   }} smooth top="500" />
   <div className='footerBg container-fluid p-5 '>
   <Row>
        <Col sm={4}>
          <h1>JHSTC</h1>
          <div className='FooterLink py-3'>
        <a href="#fg">Home</a>
        <a href="#fg">Login</a>
        <a href="#fg">Register</a>
        
          </div>
       

        </Col>
        <Col sm={4}>
          <h2>Contacts</h2>
          <div className=' FooterContact py-2'>
          <div>
          
          <div className='iconText'><i class="fa-solid fa-location-dot ">
           </i><p>Location:</p></div>
               <span> 
                 <a href="https://goo.gl/maps/Td3jbU46wfhKUNec8">
                 Nolisapara, Kazipur Road, Sirajganj ,Bangladesh
                 </a>
                 </span>
                 </div>
                 <hr />
                 <div className=''>
                 <div className='iconText'>
                 <i class="fa-solid fa-envelope"></i>
                 <p>Mail Us:</p></div>
             <span>
                <a href="mailto:jhstc2015@gmail.com">
                jhstc2015@gmail.com
                </a>
             </span>
             </div>
             <hr />
             <div>
             <div className='iconText'>
             <i class="fa-solid fa-phone"></i>
             <p>Call Us:</p></div>
             <span> <a href="tel:+880152130333">+880152130333 </a></span>
             </div>
             </div>
        </Col>
        <Col sm={4}>
          <h3>Social Media </h3>
          <div className='socialIcon py-3'>
            <a href="https://www.facebook.com/jhstc.edu.bd"><i class="fa-brands fa-facebook-f"> Facebook</i></a>
          
          </div>
          <div className='socialIcon py-3'>
          <i class="fa-brands fa-twitter">Twitter</i>
          </div>
          <div className='socialIcon py-3'>
          <i class="fa-brands fa-youtube">YouTube</i>
          </div>

        </Col>
      </Row>
      <hr />
      © Copyright JHSTC 2022. Designed and Developed by <a style={{color:"white",}} href="https://ariful-islam-portfolio-website.netlify.app/">Ariful Islam</a>
   </div>

    </div>
  )
}
