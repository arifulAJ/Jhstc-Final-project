import React from 'react';
import './ParentCourse.css';
import 'animate.css';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
const ParentCourse = () => {
    return (
        <div className='parent py-5' id='courses'>
            <h1 className='pb-5 px-5'>Featured Courses</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto">
  <div className="col">
    <div className="card ">
      <div className='containersImg'>
      <img className='image card-img-top containersImgS'  src="https://leverageedu.com/blog/wp-content/uploads/2020/06/Btech-Computer-Science.jpg"  alt="..."/>
      <div className="overlay">
    <div className="text">
      <Link to="/cse"> 
      <Image
      width="50px"
      height="50px"
      roundedCircle 
      src="https://w7.pngwing.com/pngs/981/939/png-transparent-hyperlink-computer-icons-direct-link-others-miscellaneous-text-logo.png" alt="" /> </Link>
      
    </div>
  </div>
      </div>
      <div className="card-body">
      <Link className='textTitle' to="/cse"> 
       <h5 className="card-title  ">   Computer Science And Engineering (CSE)
        </h5>
        </Link>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card ">
      <div className='containersImg'>
      <img  className='image card-img-top containersImgS'  src="https://www.hamdarduniversity.edu.bd/images/faculty/bba_img/BBA.png"  alt="..."/>
      <div className="overlay">
    <div className="text">
      <Link to="/bba"> 
      <Image
      width="50px"
      height="50px"
      roundedCircle 
      src="https://w7.pngwing.com/pngs/981/939/png-transparent-hyperlink-computer-icons-direct-link-others-miscellaneous-text-logo.png" alt="" /> </Link>
      
    </div>
  </div>
      </div>
      <div className="card-body">
      <Link className='textTitle' to="/bba">
        <h5 className="card-title">Bachelor of Business Administration (BBA)
        </h5>
        </Link>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card ">
      <div className='containersImg'>
      <img  className='image card-img-top containersImgS'  src="https://downtowncentre.org/newsite/wp-content/uploads/2017/05/HSC.png"  alt="..."/>
      <div className="overlay">
    <div className="text">
      <Link to="/hsc"> 
      <Image
      width="50px"
      height="50px"
      roundedCircle 
      src="https://w7.pngwing.com/pngs/981/939/png-transparent-hyperlink-computer-icons-direct-link-others-miscellaneous-text-logo.png" alt="" /> </Link>
      
    </div>
  </div>
      </div>
      <div className="card-body">
      <Link className='textTitle' to="/hsc">
        <h5 className="card-title">Higher Secondary School Certificate (HSC)
        </h5>
        </Link>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  
 
 
</div>
        </div>
    );
}

export default ParentCourse;
