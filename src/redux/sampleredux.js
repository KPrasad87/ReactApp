
import axios from 'axios';
import {store} from '../index'

let initialstate={
    items:[],
    item:""
    
}
const reducer = (state=initialstate,action)=>
{
  if(action.type==="Increment")
  {
    
  
    return {
        ...state,     
        items: action.data
      };
  }
  else if(action.type=="Decrement")
  {
    console.log(action.data);
    return {
      ...state,     
      items: action.data
    };
  }
return state;
}
export default reducer;