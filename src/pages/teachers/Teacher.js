import React, { Component} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Teacher.css'
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#03ACEF" , fontSize:"30px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  console.log(onClick)
  return (
    <div
      className={className}
      style={{ ...style, zIndex:"1" ,  display: "block", background: "#03ACEF" }}
      onClick={onClick}
    />
  );
}

export default class Teacher extends Component {
  
  render() {
    
    var settings = {
     
      infinite: true,
     
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
    
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
           
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
    return (
    <div className='teacherRoot py-5' id='teacher'> 
   
   <h1 className='py-5 px-5'> Our Skilled Instructors </h1>
   {/* <div className='d-flex'>
   <i class="fa-solid fa-circle-chevron-left"><SampleNextArrow /></i>
   <SampleNextArrow />
   <SamplePrevArrow />
   <i class="fa-solid fa-circle-chevron-right"><SamplePrevArrow /></i>
   </div> */}
   
      <div className=' container px-5 mx-auto '>
        
        <Slider {...settings}>
          <div className=' '>
         
          <div  className='cardImage'>
          <img src='https://i.ibb.co/G91g2GB/teacherback1.png' alt='robul islam' />
          </div>
          <div className='titleAfters'>
         <h3 className='pt-3'>Md.Robioul Islam</h3>
         <p>Department of CSE</p>
         </div>
          </div>

          <div >
           
           <div className='cardImage'>
           <img src="https://i.ibb.co/s38yH2d/teacherback2.png" alt="" />
           </div>
           <div className='titleAfters'>
           <h3 className='pt-3'>
            Md. Rahat
           </h3>
           <p>Department of CSE</p>
           </div>
          </div>
         
           <div>
           <div className='cardImage'>
           <img src="https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads//learn-press-profile/355/d33c66ce1b09b86165480bc5d19f6aee.jpeg" alt="" />
           </div>
           <div className='titleAfters'>
           <h3 className='pt-3'>
            Simtim
           </h3>
           <p>Department of CSE</p>
           </div>
          </div>
         
           <div>
           <div className='cardImage'>
           <img src="https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads//learn-press-profile/354/1f58ef405602c05780309f81f3133dfc.jpeg" alt="" />
           </div>
           <div className='titleAfters'>
           <h3 className='pt-3'>
           Morgan 
           </h3>
           <p>Department of CSE</p>
           </div>
          </div>
          
           <div>
           <div className='cardImage'>
           <img src="https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads//learn-press-profile/353/5c1b826d17206cfcbf53ac41f0dc8dc7.jpeg" alt="" />
           </div>
           <div className='titleAfters'>
           <h3 className='pt-3'>
         Tinder 
           </h3>
           <p>Department of BBA</p>
           </div>
          </div>
          
           <div>
           <div className='cardImage'>
           <img src="https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads//learn-press-profile/357/c1886f3710b06e187044a39689872fae.jpeg" alt="" />
           </div>
           <div className='titleAfters'>
           <h3 className='pt-3'>
           Samwong
           </h3>
           <p>Department of BBA</p>
           </div>
          </div>
          
           <div>
           <div className='cardImage'>
           <img src="https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads//learn-press-profile/356/cd35d7ff8516eadf2078ad687f305ae1.jpeg" alt="" />
           </div>
           <div className='titleAfters'>
           <h3 className='pt-3'>
           Notiyal
           </h3>
           <p>Department of BBA</p>
           </div>
          </div>
          
        </Slider>
      </div>
      </div>
    );
  }
}