import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import NextNav from '../../../components/shareComponents/NextPageNav/NextNav'
import BbaNav from './BbaNav/BbaNav'

export default function Bba() {
  return (
    <div>
      <NextNav />
      <div className='CseCarousel container-fluid'>
          <div>
          <img src="https://cs.nyu.edu/home/images/undergrad_scaled3.jpg" alt="" />
          <h4>Build Your Career with Modern Education</h4>
          <p>Bachelor of Business Administration (BBA)</p>
          </div>
          </div>
          
            
          
            <Row className='cseBody container-fluid ' >
        <Col sm={8}>
          <div className=' '>
            <div className='cseBodyLib px-3'>
            <img src="https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads/2017/09/4.jpg" alt="" />
            <BbaNav />
            </div>
           
          </div>
        </Col>
        <Col sm={4}>
          <div className='coursePrice py-5'>
            <h2>
               Price Of Course
            </h2>
            <p className='py-3'>Per Semester 18 k</p>
            <Button className='latestButton cseBut' type='button'>Apply Now</Button>
          </div>
        </Col>
      </Row>
           
    </div>
  )
}
