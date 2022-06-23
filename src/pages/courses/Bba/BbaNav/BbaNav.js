import React from 'react'
import { Row, Tab, Tabs } from 'react-bootstrap'
import BbaNavChild1 from './BbaNavChild/BbaNavChild1/BbaNavChild1'
import BbaNavChild2 from './BbaNavChild/BbaNavChild2/BbaNavChild2'
import BbaNavChild3 from './BbaNavChild/BbaNavChild3/BbaNavChild3'

export default function BbaNav() {
  return (
    <div>
        <Row className='justify-content-center'>
                <Tabs justified variant="pills" className='tabsCss text-danger' defaultActiveKey="tab-1">
                    <Tab className='tabCss ' title="Overview" eventKey="tab-1"> <BbaNavChild1 /></Tab>
                    <Tab title="Curriculum" eventKey="tab-2"> <BbaNavChild2 /> </Tab>
                    <Tab title="Instructor" eventKey="tab-3"> <BbaNavChild3 /></Tab>
                    
                </Tabs>

             </Row>
    </div>
  )
}
