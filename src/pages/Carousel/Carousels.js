import React from 'react';
import { Carousel,Button, ButtonGroup } from 'react-bootstrap';
import 'animate.css';
import './carousel.css'
const Carousels = () => {
  return (
    <div>
    
     <Carousel>
    
  <Carousel.Item>
    <div className='carouselImage1'>
      <div className='carouselImages'>
      <h1 className='animate__animated animate__backInDown animate__slow'>this is the collage campuses</h1>
      <p className='animate__animated animate__backInLeft animate__slow'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex aperiam</p>
      <Button className='animate__animated animate__backInUp  animate__slow buttons' type='button' > Apply now</Button>
      </div>
    </div>
   
  
  </Carousel.Item>
  <Carousel.Item>

  <div className='carouselImage2'>
      <div className='carouselImages'>
      <h1 className='animate__animated animate__backInDown animate__slow'>this is the collage campuses</h1>
      <p className='animate__animated animate__backInLeft animate__slow'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex aperiam,  </p>
      <Button className='animate__animated animate__backInUp  animate__slow buttons' type='button' > Apply now</Button>
      </div>
    </div>
   
  </Carousel.Item>
  <Carousel.Item>

  <div className='carouselImage3'>
      <div className='carouselImages'>
      <h1 className='animate__animated animate__backInDown animate__slow'>this is the collage campuses</h1>
      <p className='animate__animated animate__backInLeft animate__slow'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex aperiam,  </p>
      <Button className='animate__animated animate__backInUp  animate__slow buttons' type='button' > Apply now</Button>
      </div>
    </div>
   
  </Carousel.Item>
  
  
</Carousel>
    </div>
  );
}

export default Carousels;

