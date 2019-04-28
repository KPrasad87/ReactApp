
 import React from 'react';

 function  User1(props){
	


	return "hello functional component  :   "+props.value;

}

export default function user(props)
{
console.log(props)
const {params}= props.match;
	return <div><User1 value={params.id}/>
	<br/>
	<App/></div>
}

const App = () =>
{
	return "hello app function component";
}

