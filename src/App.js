import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import redux from 'redux';
import {connect} from 'react-redux';
import {store} from './index';

import Sampleyup from './yup/sampleyup';
import RedButton from './reactstrap/redbutton';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import Times from './moment/time';

import Example from './reactselect/example';

import {Helmet} from "react-helmet";

import Slugsample from './slugsfolder/slugsample';

import Sampldatepicker from './datepicker/sampldatepicker'


class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Make", field: "make",sortable: true, filter: true, checkboxSelection: true
      }, {
        headerName: "Model", field: "model",sortable: true, filter: true, checkboxSelection: true
      }, {
        headerName: "Price", field: "price",sortable: true, filter: true, checkboxSelection: true
      }],
      rowData: [{
        make: "Toyota", model: "Celica", price: 35000
      }, {
        make: "Ford", model: "Mondeo", price: 32000
      }, {
        make: "Porsche", model: "Boxter", price: 72000
      }]
    }
  

    this.handleIncClick = this.handleIncClick.bind(this);
    this.handleDecClick = this.handleDecClick.bind(this);
    console.log(this.props.items);

  }
  componentDidMount()
  {
     store.subscribe(()=>{
     console.log(store) ;

    }
)
   
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Example/>

        <Sampldatepicker/>
    
        <Times/>
		    <Sampleyup/>

        <RedButton/>

        
      
        <button onClick={this.handleIncClick}>+</button>
        
        <button onClick={this.handleDecClick}>-</button>
       
          <span>{this.props.items.map(e=>e.first_name)}</span>

          <div 
        className="ag-theme-balham"
        style={{ 
        height: '200px', 
        width: '600px' }} 
      >

<button onClick={this.onButtonClick}>Get selected rows</button>
        <AgGridReact

onGridReady={ params => this.gridApi = params.api }
        rowSelection="multiple"
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>


      <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            ...
        </div>

      </div>
    );
  }


  onButtonClick = e => {
    const selectedNodes = this.gridApi.getSelectedNodes()
    const selectedData = selectedNodes.map( node => node.data )
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ')
    alert(`Selected nodes: ${selectedDataStringPresentation}`)
    }

handleDecClick()
{
 
store.dispatch({type:"Decrement",data:1});

}
handleIncClick()
{
  
store.dispatch({type:"Increment",data:1});

}
}

const mapStateToProps = state => {
  console.log("items : "+state.items.length);

  const data = Array.from(state.items);
  return {items:data}
  
 }

export default connect(mapStateToProps)(App);
