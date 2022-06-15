import React from 'react';
import log from './logo/logo.jpg';
import {Image,Navbar,FormControl,Button,Container,Form,Nav} from 'react-bootstrap';
import './NaveSecond.css'
import { HashLink as Link } from 'react-router-hash-link';

const SecondNav = () => {
    return (
        <div className='naveSecond'>
           
           <Navbar  expand="lg">
  <Container fluid>
  <Image src={log}
          width="80px"
          height="80px"
          roundedCircle
          thumbnail 
         />
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mx-auto my-2 my-lg-0"
        style={{ maxHeight: '300px' }}
        navbarScroll
      >
        <ul className='mainMenu d-sm-flex'>
         <li> <Link smooth to="/home">  Home</Link></li>
          <li > <Link smooth to="#about"> About</Link> </li>
         <li> < Link smooth to="#courses">  Courses</Link></li>
         <li> <Link  smooth to="#teacher">  Teachers</Link></li>
         <li> <Link  smooth to="#notice">  Notice</Link></li>
         <li> <Link  smooth to="#student">  Student</Link></li>
         
          
         
        </ul>
        
       
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
      
        
        </div>
    );
}

export default SecondNav;
