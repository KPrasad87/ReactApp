import React from 'react';


class counter extends React.Component
{
	constructor(props)
	{
    super(props);

    this.state={
    	count:0
    }

	}
	render()
	{

	return <div>Hello counter

<button onClick={() => this.setState({count:this.state.count+1})}>click me </button>
<span>{this.state.count}</span>

	</div>
	}
}


export default counter;




