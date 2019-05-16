import React from 'react'
import Select from 'react-select'

const options = [
    {label: "one", value: 1, style: { color: 'red' }},
    {label: "two", value: 2, style: { color: 'blue' }}
    // more options...
];
class reactselect extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      a:null
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }



     handleSubmit(e) {
  
    e.preventDefault();
    console.log("form submitted");
    console.log(this.state.a);

  }
 
  render() {
   
   const {
      isValid
    } = this.props
    
    const customStyles = {
      control: (base, state) => ({
        base,
        // state.isFocused can display different borderColor if you need it
        borderColor: state.isFocused ?
          'yellow' : isValid ?
          'pink' : 'red',

           padding: 0,
    margin:0,
    -webkit-box-shadow: none,
    -moz-box-shadow: none,
    box-shadow: none,
        // overwrittes hover style
        '&:hover': {
          borderColor: 'red'
        }
      })
    }
    
    const customStyles1 = {
  option: (provided, state) => ({
    /*provided,
    width: 200,
     height:30,
    borderBottom: '1px dotted red',
    color: state.isSelected ? 'red' : 'blue',
    padding: 3,*/
  }),
  control: (provided, state) => ({
    // none of react-select's styles are passed to <Control />
 /*   width: 200,
     height:30,
     fontSize:10,
    
     borderBottom: '3px  green',
     backgroundColor:'yellow',
    
       borderColor: state.isFocused ?
          'yellow' : isValid ?
          'yellow' : 'red',*/
     
  }),

  menuList:()=>({
   /*  width: 200,
     height:30*/

  }),

   menu:()=>({
     // width: 200,
     // height:30

  }),
  singleValue: (provided, state) => {
    // const opacity = state.isDisabled ? 0.5 : 1;
    // const transition = 'opacity 300ms';

    // return { provided, opacity, transition };
  }
}

 
    return (
    <form onSubmit={this.handleSubmit}>
        <Select
          onChange={(...args) => {
           //  console.log(args);
            // let state = this && this.state ? this.state : { a: null, b: null };
            let state={};
            state.a = args[0];
            this.setState(state);
          }}
          value={this && this.state ? this.state.a : null}
          options={[{ label: "yes", value: 1 }, { label: "no", value: 0 }]}
          placeholder="first choose one"
          required
          clearable
          searchable
          styles={customStyles}
        />

        <button>button</button>
      </form>
    );
  }
}

export default reactselect;