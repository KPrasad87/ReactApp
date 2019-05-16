import React from 'react';
import {Button,Fade} from 'reactstrap';

class fadeexample extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            fadeIn:true
        };
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick() {
        console.log("before"+this.state.fadeIn)
        console.log("handle click")
        this.setState({fadeIn : !this.state.fadeIn});
        console.log(this.state.fadeIn)
    }


    render(){
        return(
            <div>
                <Button onClick={this.handleClick}>Hello fadin button</Button>
                <Fade in={this.state.fadeIn}>
                Hello fadin message
                </Fade>
                </div>

        );
    }

  
}

export default fadeexample;