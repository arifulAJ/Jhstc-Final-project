import React from 'react'
import Campus from '../campus/Campus'
import Carousels from '../Carousel/Carousels'
import CounterAnimation from '../counterAnimation/CounterAnimation';
import VideoGalary from '../galary/VideoGalary';
import ImportantPersons from '../ImportantPersons/ImportantPersons';
import Notice from '../notice/Notices/Notice';
import Student from '../student/Student';
import Teacher from '../teachers/Teacher';

import ParentCourse from './../courses/courseParent/ParentCourse';

export default function Home() {
  return (
    <div id='home'>
      
        <Carousels />
        <Campus />
        <ParentCourse />
        <Teacher />
        <Notice />
        <CounterAnimation />
        <ImportantPersons />
        <VideoGalary />
        <Student />
    </div>
  )
}
