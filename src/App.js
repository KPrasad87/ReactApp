import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import redux from 'redux';
import {connect} from 'react-redux';
import {store} from './index'


class App extends Component {

  constructor(props)
  {
    super(props);

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
      
        <button onClick={this.handleIncClick}>+</button>
        
        <button onClick={this.handleDecClick}>-</button>
       
          <span>{this.props.items.map(e=>e.first_name)}</span>

      </div>
    );
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
