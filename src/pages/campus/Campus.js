import React from 'react';
import { Button ,Col, Row } from 'react-bootstrap';
import './Campus.css'
export default function Campus() {
  return (
    <div className='container-fluid py-5 ' id='about'>
       
      <Row >
        <Col className='campusContent' sm={7}>
        <div className='py-5'>
            <h1 >well come to our campus</h1>
            <p className='contentHed py-3'>campus information simply talk about the campus </p>
            <p className='contentHed2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aperiam iusto veniam illum. Dolore temporibus sapiente delectus quia deserunt commodi voluptas! Dignissimos repellat nostrum vel repudiandae assumenda sunt natus explicabo.</p>
            <Button className='mt-3 buttonsT' type='button'> Read more</Button>
        </div>
        </Col>
        <Col sm={5}>
        <div className='campusImg'>
            <img src="https://i.ibb.co/Bcpp7PC/rsz-carousel.jpg" alt="" />
        </div>
        </Col>
      </Row>
     
       
    </div>
  )
}
