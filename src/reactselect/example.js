import React from 'react';
import Select from 'react-select';
 
const options = [
  { value: 'chocolate', label: 'Chocolate',color: 'yellow' },
  { value: 'strawberry', label: 'Strawberry',color: 'red' },
  { value: 'vanilla', label: 'Vanilla',color: 'green' }
];

const CustomStyle = {
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? "red" : "green",
    })
  }

  const valueFromId = (opts, id) => console.log(opts);



  const customStyles = {
      
    control: (base, state) => ({
        
      ...base,
      background: "#FFF2222",
       padding: 2,
      // backgroundPosition: "right center",
      width:200,
      height:0,
      // match with the menu
      borderRadius: state.isFocused ? "19px 30px 30px 30px" : 0,
      // Overwrittes the different states of border
      borderColor: {state} ? "yellow" : "green", 
     //  borderColor: state.isFocused ? "yellow" : "green",
      // Removes weird border around container
     // boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "red" : "blue"
      },
      textAlign: "right"
    }),

    option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected ? "red" : "blue",
        ':active': {
          backgroundColor: state.isSelected ? "yellow" : "green"
        }
      }),
    menu: base => ({
      ...base,
      // override border radius to match the box
      borderRadius: 100,
      // beautify the word cut by adding a dash see https://caniuse.com/#search=hyphens for the compatibility
      hyphens: "auto",
      // kill the gap
      marginTop: 100,
      textAlign: "left"
      // prevent menu to scroll y
      // wordWrap: "break-word"
    }),
    menuList: base => ({
      ...base,
      // kill the white space on first and last option
      padding: 100
    })
  };

  const customStyless = {
    option: (provided, state) => ({
      ...provided,
      border: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
     
  
      return { ...provided, opacity, transition };
    }
  }
  

const option = (base,{ color }) =>  ({...base, color })
 
class example extends React.Component {
  state = {
    selectedOptions:[],touched:true,clicked:false,disabled:false

    
  }
  handleChange = (selectedOption) => {
    this.setState({
        selectedOptions: [...this.state.selectedOptions, selectedOption],
        touched:false,
        disabled:false
    });
    console.log(`Option selected:`, this.state.selectedOptions.length);
  }
  handleBlur=()=>
  {
      console.log("blur");
  }

  handleClick=(event)=>
  {
    event.preventDefault();
   
    this.setState({clicked:true})
      console.log("click")
  }

  
  render() {
    const { selectedOption } = this.state;

 
 
    return (
        <div>
        <form onSubmit={this.handleClick}>
      
      
      <Select
         value={this.state.selectedOptions.map(e=>e)}
        onChange={this.handleChange}
        options={options}
        hasValue
        simpleValue
        field="Hello form"
        isSearchable={true}
        isDisabled={false}
        errorMessage="error occured"
        placeholder="Hello please select"
        textLabel="text label"
        styles={customStyles}
        
      />



<div>
{(this.state.touched && this.state.clicked) &&   <div style={{'fontSize':'12px','color':'rgb(244, 67, 54)'}}>Required</div>}</div>


<button disabled={this.state.disabled}>Login</button>
   
</form>


</div>


    );
  }
}

export default example;