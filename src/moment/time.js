import React from 'react';
import Moment from 'react-moment';

class time extends React.Component{


    render()
    {
        const dateToFormat = '1976-04-19T12:59-0500';
        return (
            
            <div>
            <Moment  interval={1000} >{dateToFormat}</Moment>
            <hr/>
            <Moment date={dateToFormat}></Moment></div>
        );
    }
}

export default time;