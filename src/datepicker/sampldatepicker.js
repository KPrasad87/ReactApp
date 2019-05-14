import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class sampldatepicker extends React.Component{


    constructor(props)
    {
        super(props);
        this.state={
            startdate:moment()
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange=(date)=>
    {
        this.setState({startdate:date})
    }
    handleSubmit=(e)=>
    {
        e.preventDefault();
        let main = this.state.startdate;
        console.log("date picker "+main);
    }

    render()
    {
        return(
            <div className = "container">
        <h3>React Datepicker Example</h3>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label>Select Date: </label>
            <DatePicker
              selected={ this.state.startDate }
              onChange={ this.handleChange }
              name="startDate"
              dateFormat="MM/DD/YYYY"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-success">Add Date</button>
          </div>
        </form>
      </div>


        );
    }
}

export default sampldatepicker;

