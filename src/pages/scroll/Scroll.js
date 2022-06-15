import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

class Scroll extends React.Component {
    render() {
        return (
            
                <React.Fragment>
                    <CountUp style={{fontSize:"50px"}} start={0} end={100} prefix="K" duration="2">

                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}

                    </CountUp>
                </React.Fragment>
           

        )
    }
}

export default Scroll;