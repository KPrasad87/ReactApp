import React from 'react';
import {Route,Link } from 'react-router-dom';



class Users extends React.Component
{
	
render()  {
  const { url } = this.props.match
	

return (


	<div>
	
	<ul>
	<li>
	<Link to ="users/1">User 1 </Link> 
	</li>
	</ul>
	<Route path = "/users/:id" component={ids}/>
	</div>

)
}

}

const ids = ({ match }) => <p>{match.params.id}</p>

export default Users