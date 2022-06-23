import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './CseNavChild2.css'
export default function CseNavChild2() {
  return (
    <div className='py-5'>
 


    <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header className="headerColor">Basics</Accordion.Header>
        <Accordion.Body className="bodyChild">
          <p>In this section we'll show you how this course has been structured and how to get the most out of it. We'll also show you how to solve the exercises and submit quizzes.</p>
          <hr />
          <p>Lecture : 1 to 10 is the   Basic of  Text Book Info</p>
          <hr />
          <p>Class Type : Offline Class</p>
        </Accordion.Body>
      </Accordion.Item>
     
      <Accordion.Item eventKey="1">
        <Accordion.Header  className="headerColor">Advanced</Accordion.Header>
        <Accordion.Body>
    <p>In this section we'll show you how this course has been structured and how to get the most out of it. We'll also show you how to solve the exercises and submit quizzes.</p>
    <hr />
    <p>Lecture : 11 to 40 is the   Advance Class </p>
          <hr />
          <p>Class Type : Offline Class</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className="headerColor">Conclusion</Accordion.Header>
        <Accordion.Body>
        <p>In this section we'll show you how this course has been structured and how to get the most out of it. We'll also show you how to solve the exercises and submit quizzes.</p>
    <hr />
    <p>Lecture : 41 to 45 is the   Overview Class </p>
          <hr />
          <p>Class Type : Offline Class</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>




    </div>
  )
}
