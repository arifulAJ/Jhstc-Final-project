import React from 'react';
import { Button } from 'react-bootstrap';
import './UpComingEvent.css'

export default function UpComingEvent() {
  return (
    <div className='py-5'>
        <h1 className='py-3'>Upcoming Events</h1>
        <div className='  upComingEventBg '>
        
           <div className='upComingEventImage'>
           <img src="https://w7.pngwing.com/pngs/49/438/png-transparent-calendar-appointment-deadline-date-time-year-month-day-icon-number.png" alt="" />
           </div>
           <div>
            <h4>Apply for new student registration</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel libero, quae ut est commodi perspiciatis vero ducimus voluptatibus nisi, pariatur aliquam fugiat animi dolor. Doloribus minima excepturi provident expedita!</p>
           </div>

         
        </div>
        <hr />
        <div className='  upComingEventBg '>
        
           <div className='upComingEventImage'>
           <img src="https://freepngimg.com/save/130499-25-number-picture-free-photo/512x512" alt="" />
           </div>
           <div>
            <h4>Apply for new student registration</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vel libero, quae ut est commodi perspiciatis vero ducimus voluptatibus nisi, pariatur aliquam fugiat animi dolor. Doloribus minima excepturi provident expedita!</p>
           </div>

         
        </div>
        <div className='buttonCenter'>
          <Button className='latestButton' type='button'> VIEW ALL</Button>
          </div>
    </div>
  )
}
