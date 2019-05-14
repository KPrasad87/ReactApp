import React from 'react';
import Select from 'react-select';
 
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const customStyles = {
    control: base => ({
      ...base,
      height: 5,
      minHeight: 'fit-content'
      //29
      
    })
  }; 
class example2 extends React.Component {
    
  state = {
    selectedOption: null,
  }

  style={

  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  handleChange2 = (selectoption) => {
   // this.setState({ selectedOption });
    console.log(`Option selected:`, selectoption);
  }
  
  render() {
    const { selectedOption } = this.state;
 
    return (
      <Select
        value={selectedOption}
       onChange={this.handleChange}
        options={options}
        //autoFocus={false}
       // className=""
       //  defaultInputValue=""
     //    defaultMenuIsOpen={false}
       //  defaultValue=""
        // inputValue=""
          // closeMenuOnSelect={false}
        //closeMenuOnScroll={true}
        // menuIsOpen={true}
        isSearchable={true}

       // backspaceRemovesValue={true}
      //  controlShouldRenderValue={true}
       
     styles={customStyles}

     textFieldProps={{

        InputLabelProps:{
            shrink:true
        }
     }}
     
     
     />);

  }
}

export default example2;