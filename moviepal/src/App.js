import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
             
             <div className="center">
             <h1 className = "title">Welcome to MoviePal</h1>
             <TextField id="standard-basic" label="Enter your favorite movie to explore your new favorite !" className ="text"  />
             <div className = "margin">
             <Button variant="contained" color="primary" >Go !</Button>
             </div>
             </div>    
      </header>
    </div>
  );
}

export default App;
