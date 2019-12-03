import React, { Component } from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Search extends Component {
 
  render(){
    return (      
      <div className="center">
        <h1 className = "title">Welcome to MoviePal!</h1>
        <TextField id="standard-basic" label="Enter your favorite movie to explore your new favorite !" className ="text"  />
        <div className = "margin">
          <Button variant="contained" color="primary" >Go !</Button>
        </div>
      </div> 
    );
  }
}

export default Search;