import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './user';
import Hello from './Hello';


class App extends Component {

  constructor(props)
  {
    super(props);
    this.state={

      user:"",
      pwd:""
    }
  }

   onSubmit = (event) => {
    // this.props.history.push('/users')

    event.preventDefault();
   var username= event.target.user.value;
   var pwd = event.target.pwd.value;
   this.setState({user:username,pwd:pwd});
   this.props.history.push('/home')


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
       
        

        <form onSubmit={this.onSubmit}>
        <input placeholder="name" type="name" name="user"/>
        <br/>
        <input placeholder="pwd" type="pwd"  name="pwd"/>
        <br/>
        <input type="submit" value="submit"/>
      </form>
      
      {this.state.username!=null?true:false}
      <Hello user={this.state.user}/>


      </div>
    );
  }
}

export default App;
