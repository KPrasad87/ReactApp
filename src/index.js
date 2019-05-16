import React from "react";
import ReactDOM from "react-dom";
import Counter from './counter';
import Fcounter from './fcounter';
import Listex from './listex';
import Selects from './reactselect';

//import img from './images/Tulips.jpg';

 import  './index.css';
// importing css from extenal files
  import styles from './index.css';
  //
  import imgss from './images/Tulips.jpg'


  import Apicall from './apicall';

const divStyle = {
  margin: '40px',
  border: '5px solid pink',
  backgroundColor : 'red'
};


//var homeImg = document.getElementById('home');
// homeImg.src = img;

const Index = () => {
  return <React.Fragment>
  <Selects/>

  <Apicall/>
  <Listex/>

 <Counter/>
 <Fcounter/>

  <div id ={styles.india}>hello india

<div style ={divStyle}>Hello inline style</div>
  </div>

  <div className ='container'>Hello css module </div>
  <img src={imgss}/>

  </React.Fragment>
};

ReactDOM.render(<Index />, document.getElementById("index"));