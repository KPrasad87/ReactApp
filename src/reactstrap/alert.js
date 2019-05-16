import React from 'react';
import {Alert,UncontrolledAlert} from 'reactstrap'

const example = ()=>
    {
        return (<div>
        <Alert isOpen={false} color="primary">
            Hello alret
        </Alert>
        <Alert color="secondary">
            Hello alret
        </Alert>
        </div>);
    };

    class toggleAlert extends React.Component{
        constructor(props)
        {
            super(props);
            this.state={
                visible:true
            };
            this.ondismiss = this.ondismiss.bind(this);
        }
        ondismiss(){
    this.setState({visible:false});
        }

        render()
        {
            return(
<div>
                <Alert isOpen={this.state.visible} toggle={this.ondismiss} fade={true}>
                Hello toggle alert
                </Alert>
                <UncontrolledAlert>
                    This is uncontrolled alert no need controls
                </UncontrolledAlert>
                </div>
            );
        }
 
    }

    export default toggleAlert;