import React from 'react';
import LatestPost from '../LatestPost/LatestPost';
import UpComingEvent from '../UpComingEvent/UpComingEvent';
import './Notice.css'
import { Col, Row } from 'react-bootstrap';

export default function Notice() {
  return (
    <div className='NoticeBg' id='notice'>
        <div className='container-fluid' >
      <Row>
        <Col sm={6}> <LatestPost /></Col>
        <Col sm={6}> <UpComingEvent /></Col>
      </Row>
      </div>
       
       
        
    </div>
  )
}
