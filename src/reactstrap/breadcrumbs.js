import React from 'react';
import {Breadcrumb,BreadcrumbItem} from 'reactstrap';

class breadcrumbsexample extends React.Component{


    render()
    {
        return(


            <Breadcrumb>
            
            <BreadcrumbItem active>Home</BreadcrumbItem>
            <BreadcrumbItem active>work</BreadcrumbItem>
            </Breadcrumb>
        )
    }
}

export default breadcrumbsexample;