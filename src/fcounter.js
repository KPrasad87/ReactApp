import React , {useState} from 'react';


function fcounter(){
	
const [count, setcount] = useState(0);

return(

<div>

<span>{count} </span>
<button onClick={()=>setcount(count + 1)}>
	click  functional component
	</button>
	</div>

);
	
}

export default fcounter;