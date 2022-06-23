import React from 'react';
import { Row, Tab, Tabs } from 'react-bootstrap';
import HscNavChild1 from './HscNavChild/HscNavChild1/HscNavChild1';
import HscNavChild2 from './HscNavChild/HscNavChild2/HscNavChild2';
import HscNavChild3 from './HscNavChild/HscNavChild2/HscNavChild3/HscNavChild3';

const HscNav = () => {
    return (
        <div>
           <Row className='justify-content-center'>
                <Tabs justified variant="pills" className='tabsCss text-danger' defaultActiveKey="tab-1">
                    <Tab className='tabCss ' title="Overview" eventKey="tab-1"> <HscNavChild1 /></Tab>
                    <Tab title="Curriculum" eventKey="tab-2"> <HscNavChild2 /> </Tab>
                    <Tab title="Instructor" eventKey="tab-3"> <HscNavChild3 /></Tab>
                    
                </Tabs>

             </Row> 
        </div>
    );
}

export default HscNav;
