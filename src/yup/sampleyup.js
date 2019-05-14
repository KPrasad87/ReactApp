import React from 'react'
import yup from 'yup';


const objectyup = yup.object();
class sampleyup extends React.Component{
state={};

render()
{

 const valid = objectyup.isValidSync(this.state);
 console.log(valid+"valid");
return (
<div> valid data+{valid} </div>);
}
}
export default sampleyup;