import React from 'react';
import { Button } from 'react-bootstrap';
import './LatestPost.css'

export default function LatestPost() {
  return (
    <div className='py-5'>
        <h1 className='py-3'>Latest Posts</h1>
      
          <div className=' latestPostPerSection  '>
           <div className='latestPostImage'>
           <img src="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/144088/s960_SFE_Gov_Launch_iconnect_1.1.jpg" alt="" />
           </div>
           <div>
         
            <h4>Apply for new student registration</h4>
            <h6> 20-July-2022</h6>
            <p>for the new student we already open our registration form so why you are waiting for ? </p>
           </div>
           
          </div>
          <hr />
          <div className='latestPostPerSection  '>
           <div className='latestPostImage'>
           <img src="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/144088/s960_SFE_Gov_Launch_iconnect_1.1.jpg" alt="" />
           </div>
           <div>
            <h4>Apply for new student registration</h4>
            <h6> 20-July-2022</h6>
            <p>for the new student we already open our registration form so why you are waiting for ? </p>
           </div>

          </div>
          <hr />
          <div className='latestPostPerSection  '>
           <div className='latestPostImage'>
           <img src="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/144088/s960_SFE_Gov_Launch_iconnect_1.1.jpg" alt="" />
           </div>
           <div>
            <h4>Apply for new student registration</h4>
            <h6> 20-July-2022</h6>
            <p>for the new student we already open our registration form so why you are waiting for ? </p>
           </div>

          </div>
         
          
          <div className='buttonCenter'>
          <Button className='latestButton' type='button'> VIEW ALL</Button>
          </div>
       
    </div>
  )
}
