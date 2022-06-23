import React from 'react';
import {  Row, Tab, Tabs } from 'react-bootstrap';
import CseNavChild1 from './cseNavChild/CseNavChild1';
import './CseNav.css'
import CseNavChild2 from './cseNavChild/cseNavChild2/CseNavChild2';
import CseNavChild3 from './cseNavChild/cseNavChild2/cseNavChild3/CseNavChild3';

const CseNav = () => {
    return (
        <div>
             <Row className='justify-content-center'>
                <Tabs justified variant="pills" className='tabsCss text-danger' defaultActiveKey="tab-1">
                    <Tab className='tabCss ' title="Overview" eventKey="tab-1"> <CseNavChild1 /></Tab>
                    <Tab title="Curriculum" eventKey="tab-2"> <CseNavChild2 /> </Tab>
                    <Tab title="Instructor" eventKey="tab-3"> <CseNavChild3 /></Tab>
                    
                </Tabs>

             </Row>
        </div>
    );
}

export default CseNav;
