import  React from 'react';


class apicall extends React.Component
{

async componentDidMount()
{

const data = await fetch("https://hn.algolia.com/api/v1/search?query=redux");
console.log(data);

}
	
render()
{
	


	return  <div>apicall component </div>
}


}




export default apicall;
