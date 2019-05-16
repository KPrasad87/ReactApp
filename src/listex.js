import React,{useState} from 'react';

	

const initstate =[

{
	id:10,
	name:"ramakrishna"

},
{
	id:20,
	name :"siva"

}

]

function listex(){

	const [init,setlist]=useState(initstate);

function onRemove(id)
{


	const newlist = init.filter(items => items.id !== id);
	setlist(newlist);
}


return(

<div>

<ul>
{init.map(items => <li key ={items.id}>{items.id} {items.name}

<button type ="button" onClick={()=>onRemove(items.id)}> remove names </button>


	</li>)}


</ul>


</div>




);

}

export default listex;