import React from 'react';
import './CounterAnimation.css';
import CountUp from 'react-countup';
import { Col, Row } from 'react-bootstrap';
import Scroll from '../scroll/Scroll';
import VisibilitySensor from 'react-visibility-sensor';
export default function CounterAnimation() {
  return (
    <div className='counterAnimations'>
        <Row>
        <Col sm={4}>
        <div className='d-flex countModify'> 
        <CountUp   end={15} 
        duration={1} >
          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span className='count' ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                      
           </CountUp>
        <p>PROFESSIONAL INSTRUCTORS</p>
        </div>
        </Col>
        <hr className='brackhr' />
        <Col  sm={4}>
        <div className='d-flex countModify'> 
        <CountUp  end={30} 
        duration={1} >
          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span className='count' ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                      
           </CountUp>
           <p>LIVE SESSIONS EVERY YEAR</p>
        </div>
        </Col>
        <hr className='brackhr' />
        <Col sm={4}>
        <div className='d-flex countModify'> 
        <CountUp  end={240} 
        duration={1} >
          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span className='count' ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                      
           </CountUp>
           <p>REGISTERED STUDENTS</p>
        </div>
        </Col>
        
       
      </Row>
     
    </div>
  )
}
