import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './videoGalary.css'
import Gallery from './Gallery'
import Event from './Event'
export default function VideoGalary() {
  return (
    <div className='mt-5 p-3 galleryAndEvent'>
      <h1 className='text-center py-5'>Our Cultural Programs  Event  & Gallery</h1>
        <div >
  <Row className='gy-5' >
    <Col   sm={6}>
      <Gallery />
      
    </Col>
    <Col sm={6}>
    <Event />
    </Col>
  </Row>
  </div>
    </div>
  )
}
